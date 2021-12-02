import Head from 'next/head';
import HeaderCartButton from './HeaderCartButton';
import SearchBar from '../navigation-bar/SearchBar';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Marvel App</title>
        <meta name="description" content="Comics store" />
      </Head>
      <header className="fixed inset-0 w-full	h-20 flex justify-between items-center py-0 px-5 z-10">
        <h1>Title</h1>
        <HeaderCartButton />
      </header>
      <nav className="m-16">
        <SearchBar />
      </nav>
      <div className='m-12'>{props.children}</div>
    </div>
  );
};

export default Layout;
