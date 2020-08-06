import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SEO } from './../config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="description" content={SEO.description} />
          <meta name="twitter:card" content="summary" />
          <meta property="og:title" content={SEO.title} />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:image" content={SEO.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
