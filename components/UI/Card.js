import ComicItemForm from "../comics/ComicItemForm";
import Image from "next/image";

const Card = (props) => {
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
        <div className="p-2 mx-2 h-40">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
            {props.comic.title}
          </h4>
          <p className="leading-normal text-gray-700">{props.comic.creator}</p>
          <p className="leading-normal text-gray-700">{props.comic.edition}</p>
          <p className="leading-normal text-gray-700">{props.comic.price}</p>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <ComicItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default Card;
