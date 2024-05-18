// components/Favicons.js
import Head from 'next/head';

const Favicons = () => {
  return (
    <Head>
      {/* Standard Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Light and Dark Favicons */}
      <link
        rel="icon"
        href="/img/favicon-dark.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/img/favicon.png"
        media="(prefers-color-scheme: dark)"
      />

      {/* Apple Touch Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
    </Head>
  );
};

export default Favicons;
