import '@/styles/globals.css'; // Importar estilos globales aquí
import Head from 'next/head'; // Añadir esta importación

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alenort</title>
        <meta name="description" content="Somos una Distribuidora Avícola con mas de 5 años de trayectoria ofrecemos - Productos de calidad - Stock Permanente - Atencion Personalizada" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}