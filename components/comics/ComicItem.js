import { useRouter } from 'next/router';
import Image from 'next/image';

const ComicItem = (props) => {
  const src = `${props.comic.image ?? 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada'}/portrait_incredible.jpg`;

  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/comics-details/' + props.comic.id);
    props.onOpenComic();
  };

  return (
    <li className="max-w-xs overflow-hidden rounded-lg shadow-lg h-auto">
      <Image
        className="cursor-pointer"
        loader={() => src}
        src={src}
        width={500}
        height={500}
        unoptimized="true"
        alt="comic"
        onClick={showDetailHandler}
      />
      <div className="px-6 py-4">
        <div className="p-2 m-2 h-40">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{props.comic.title}</h4>
          <p className="leading-normal text-gray-700">{props.comic.creator}</p>
          <p className="leading-normal text-gray-700">{props.comic.edition}</p>
          <p className="leading-normal text-gray-700">{props.comic.price}</p>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Amount"
              type="text"
              placeholder="Amount"
            />
          </div>
          <button className="mx-8 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            add
          </button>
        </div>
      </div>
    </li>
  );
};

export default ComicItem;
