import { Provider } from 'react-redux';
import '../styles/globals.css';
import '../styles/styles.css';
import store from '../store/index';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
