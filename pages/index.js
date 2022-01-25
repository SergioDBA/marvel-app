import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ComicsList from '../components/comics/ComicsList';
import PaginationBar from '../components/UI/PaginationBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Cart from '../components/Cart/Cart';

const HomePage = (props) => {
  const comicsPerPage = 16;
  const [actualPage, setActualPage] = useState(1);
  const [comics, setComics] = useState(props.comics);
  const [isLoading, setIsLoading] = useState(false);
  const isTheFisrtLoad = useRef(true);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const changePageHandler = useCallback((pageNumber) => {
    console.log(pageNumber, 'Page number');
    setActualPage(pageNumber);
  }, []);

  useEffect(() => {
    if (isTheFisrtLoad.current) {
      isTheFisrtLoad.current = false;
      return;
    }

    const fetchComics = async () => {
      setIsLoading(true);
      // fetch data from an API
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?offset=${
          (actualPage - 1) * comicsPerPage
        }&limit=${comicsPerPage}&apikey=15a2acbec4c418d7142db4d36234dfac&ts=1000&hash=2e402a78ec28b36718e483c475478d91`
      );
      const data = await response.json();
      const comics = data.data.results.map((comic) => ({
        id: comic.id,
        title: comic.title,
        edition: comic.series.name,
        creator: comic.creators.items[0]?.name ?? null,
        image: comic.images[0]?.path ?? null,
        price: comic.prices[0].price,
      }));
      setComics(comics);
      setIsLoading(false);
      console.log('Use effect222', comics);
    };
    fetchComics();
  }, [actualPage]);

  return (
    <>

      <Cart></Cart>
      <main className={styles.main}>
        <Link href="/comics-details">comics detail link</Link>
        <article>Content</article>
        {isLoading ? <LoadingSpinner /> : <ComicsList comics={comics} />}
        <PaginationBar updatePage={changePageHandler} />
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const response = await fetch(
    'https://gateway.marvel.com:443/v1/public/comics?limit=16&apikey=15a2acbec4c418d7142db4d36234dfac&ts=1000&hash=2e402a78ec28b36718e483c475478d91'
  );
  const data = await response.json();
  console.log('22222',data, response.status);

  return {
    props: {
      comics: data.data.results.map((comic) => ({
        id: comic.id,
        title: comic.title,
        edition: comic.series.name,
        creator: comic.creators.items[0]?.name ?? null,
        image: comic.images[0]?.path ?? null,
        price: comic.prices[0].price,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

// <main className={styles.main}>
//   <h1 className={styles.title}>
//     Welcome to <a href="https://nextjs.org">Next.js!</a>
//   </h1>

//   <p className={styles.description}>
//     Get started by editing{' '}
//     <code className={styles.code}>pages/index.js</code>
//   </p>

//   <div className={styles.grid}>
//     <a href="https://nextjs.org/docs" className={styles.card}>
//       <h2>Documentation &rarr;</h2>
//       <p>Find in-depth information about Next.js features and API.</p>
//     </a>

//     <a href="https://nextjs.org/learn" className={styles.card}>
//       <h2>Learn &rarr;</h2>
//       <p>Learn about Next.js in an interactive course with quizzes!</p>
//     </a>

//     <a
//       href="https://github.com/vercel/next.js/tree/master/examples"
//       className={styles.card}
//     >
//       <h2>Examples &rarr;</h2>
//       <p>Discover and deploy boilerplate example Next.js projects.</p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//     >
//       <h2>Deploy &rarr;</h2>
//       <p>
//         Instantly deploy your Next.js site to a public URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>

// <footer className={styles.footer}>
//   <a
//     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Powered by{' '}
//     <span className={styles.logo}>
//       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//     </span>
//   </a>
// </footer>
//     </div>
//   )
// }
