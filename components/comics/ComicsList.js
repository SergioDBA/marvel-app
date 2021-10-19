import ComicItem from "./ComicItem";

const ComicsList = (props) => {
  console.log("ComicList");
  console.log(props.comics);

  const comicList = props.comics.map((comic) => (
    <ComicItem key={comic.id} comic={comic} />
  ));

  return (
    <div>
      <ul className="grid gap-4 grid-cols-4">{comicList}</ul>
    </div>
  );
};

export default ComicsList;
