import { useRouter } from "next/router";

const ComicDetail = () => {
  const router = useRouter();
  const comicId = router.query.comicsId;
  return (
    <>
      <h1>Comic Detail</h1>
      <h2>{comicId}</h2>
    </>
  );
};

export default ComicDetail;
