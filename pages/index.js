import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/navigation-bar/SearchBar";
import ComicItem from "../components/comics/ComicItem";
import ComicsList from "../components/comics/ComicsList";

const HomePage = () => {
  const fetchComics = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?apikey=15a2acbec4c418d7142db4d36234dfac&ts=1000&hash=2e402a78ec28b36718e483c475478d91",
      { params: "" }
    );
    const data = await response.json();
    console.log(data);
    console.log(data.data.results);
  };

  fetchComics();
  return (
    <>
      <Head>
        <title>Marvel App</title>
        <meta name="description" content="Comics store" />
      </Head>
      <header>
        <h1>Title</h1>
      </header>
      <nav>
        <SearchBar />
      </nav>

      <main className={styles.main}>
        <Link href="/comics-details">comics detail link</Link>
        <article>Content</article>
        <ComicsList />
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

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
