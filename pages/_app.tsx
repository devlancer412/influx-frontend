import Providers from '../components/Providers';
import '../styles/global.css';
import Layout from './../components/layout/index';

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div id='modal-root' className='absolute top-0 left-0'></div>
    </Providers>
  );
}
