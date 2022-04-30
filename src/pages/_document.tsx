import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="./favicon.ico" />
          <link rel="apple-touch-icon" sizes="76x76" href="./favicon.ico" />
          <link
            href={`https://fonts.googleapis.com/css?family=
                  Open+Sans:300,400,600,700&display=optional`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
