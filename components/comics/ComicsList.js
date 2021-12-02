import { useEffect, useState } from 'react';
import ComicItem from './ComicItem';
import LoadingSpinner from '../UI/LoadingSpinner';

const ComicsList = (props) => {
  console.log('ComicList');
  console.log(props.comics);

  const [isLoading, setIsLoading] = useState(false);

  const openComicDetailHandler = () => {
    setIsLoading(true);
  };

  const comicList = props.comics.map((comic) => <ComicItem key={comic.id} comic={comic} onOpenComic={openComicDetailHandler} />);

  return <div>{isLoading ? <LoadingSpinner /> : <ul className="grid gap-4 grid-cols-4">{comicList}</ul>}</div>;
};

export default ComicsList;
