import { useRouter } from 'next/router';

const ComicDetail = (props) => {
  const router = useRouter();
  const comicId = router.query.comicsId;
  return (
    <>
      <h1>{props.comics.title}</h1>
      <h2>{comicId}</h2>
    </>
  );
};

export async function getStaticPaths() {
  // fetch data from an API
  const response = await fetch(
    'https://gateway.marvel.com:443/v1/public/comics?limit=16&apikey=15a2acbec4c418d7142db4d36234dfac&ts=1000&hash=2e402a78ec28b36718e483c475478d91'
  );
  const data = await response.json();

  const comics = data.data.results.map((comic) => ({
    id: comic.id,
  }));

  return {
    fallback: 'blocking',
    paths: comics.map((comic) => ({
      params: { comicsId: comic.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  console.log('----------------------------------------------------', context.params.comicsId);
  // fetch data from an API
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/comics/${context.params.comicsId}?apikey=15a2acbec4c418d7142db4d36234dfac&ts=1000&hash=2e402a78ec28b36718e483c475478d91`
  );
  const data = await response.json();
  return {
    props: {
      comics: {
        id: data.data.results[0].id,
        title: data.data.results[0].title,
        edition: data.data.results[0].series.name,
        creator: data.data.results[0].creators.items[0]?.name ?? null,
        image: data.data.results[0].images[0]?.path ?? null,
        price: data.data.results[0].prices[0].price,
      },
    },
    revalidate: 1,
  };
}

export default ComicDetail;
