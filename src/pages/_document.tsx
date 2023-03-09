import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4780451799247980"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H8MRCTR32D', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-H8MRCTR32D" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
