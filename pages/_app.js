// import App from 'next/app'
import './../css/global.scss';
import { DefaultSeo } from 'next-seo';
import Header from './../components/Header';
import Footer from './../components/Footer';
import FundacionSi from './../components/FundacionSi';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <DefaultSeo
        title="involucrarte."
        description="Una forma de ayudar a los que más lo necesitan."
        openGraph={{
          type: 'website',
          locale: 'es',
          url: 'https://involucrarte.com.ar/',
          images: [{ url: 'https://involucrarte.com.ar/images/opengraph.png' }],
          site_name: 'involucrarte.',
        }}
        twitter={{
          cardType: 'summary',
        }}
      />
      <Header></Header>
      <main className="main">
        <Component {...pageProps} />

        <FundacionSi></FundacionSi>
      </main>
      <Footer></Footer>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
