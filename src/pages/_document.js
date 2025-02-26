// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Metadatos SEO básicos */}
          <meta name="description" content="Somos Alenort una empresa inaugurada en 2020 y con nosotros Podras encontrar una amplia variedad de productos y stock permanente de productos frescos y seleccionados." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="ale, alenort, avicola, avicolas, pollos, cajones de pollo, mayorista avicola" />
          <meta name="author" content="Alenort" />
          
          {/* Open Graph (para redes sociales) */}
          <meta property="og:title" content="Alenort" />
          <meta property="og:description" content="Siguenos en nuestras redes." />
          <meta property="og:image" content="https://www.alenort.com/logo.png" />
          <meta property="og:url" content="https://www.alenort.com" />
          <meta property="og:type" content="website" />

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
