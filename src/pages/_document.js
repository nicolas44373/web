// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Metadatos SEO básicos */}
          <meta name="description" content="Somos Alenort, una empresa inaugurada en 2020, con una amplia variedad de productos y stock permanente de productos frescos y seleccionados." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="ale, alenort, avícola, avícolas, pollos, cajones de pollo, mayorista avícola" />
          <meta name="author" content="Alenort" />

          {/* Open Graph (para redes sociales) */}
          <meta property="og:title" content="Alenort" />
          <meta property="og:description" content="Síguenos en nuestras redes sociales y descubre más sobre nuestros productos." />
          <meta property="og:image" content="https://www.alenort.com/logo.png" />
          <meta property="og:url" content="https://www.alenort.com" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_ES" /> {/* Localización en español */}
          <meta property="og:site_name" content="Alenort" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@alenort" /> {/* Cambia con el handle de Twitter si lo tienes */}
          <meta name="twitter:title" content="Alenort" />
          <meta name="twitter:description" content="Síguenos en nuestras redes sociales y descubre más sobre nuestros productos." />
          <meta name="twitter:image" content="https://www.alenort.com/logo.png" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

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
