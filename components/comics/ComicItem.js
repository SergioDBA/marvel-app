import Image from "next/image";

const ComicItem = (props) => {
  console.log(props.comic.title);
  return (
    <li className="max-w-xs overflow-hidden rounded-lg shadow-lg h-auto">
      <Image
        className="object-cover w-full h-full"
        src={`${
          props.comic.image || "/u/prod/marvel/i/mg/c/60/4bc69f11baf75"
        }/portrait_incredible.jpg`}
        alt="Comic"
        width="500"
        height="500"
        layout="intrinsic"
      />
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          {props.comic.title}
        </h4>
        <p className="leading-normal text-gray-700">{props.comic.creator}</p>
        <p className="leading-normal text-gray-700">{props.comic.edition}</p>
        <p className="leading-normal text-gray-700">{props.comic.price}</p>
      </div>
    </li>
  );
};

export default ComicItem;
