import ComicItem from "./ComicItem";

const ComicsList = () => {
  const DUMMY_COMICS = [
    {
      id: "id1",
      title: "ComicName1",
      creator: "someName1",
      series: "Serie1",
      price: 1000,
    },
    {
      id: "id1",
      title: "ComicName2",
      creator: "someName2",
      series: "Serie2",
      price: 2000,
    },
    {
      id: "id1",
      title: "ComicName3",
      creator: "someName3",
      series: "Serie3",
      price: 3000,
    },
  ];

  const comicList = DUMMY_COMICS.map((comic) => <ComicItem key={comic.id} />);

  return (
    <div>
      <ul>{comicList}</ul>

      <h1>Comics Details</h1>
    </div>
  );
};

export default ComicsList;
