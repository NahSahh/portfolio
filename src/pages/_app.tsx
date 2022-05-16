import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <>
      <Head>
        <title>{process.env.userName}</title>
        <meta
          name="title"
          content={`${process.env.userName}'s Portfolio site`}
        />
        <meta
          name="description"
          content={`${process.env.userName}'s site, you should use Kythi.com btw.`}
        />
        <meta name="og:image" content="unknown.png" />{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center">
        <div className="m-auto flex flex-col items-center">
          <span className="mt-2 animate-pulse text-lg text-gray-300 font-semibold">
            Loading
          </span>
        </div>
      </div>
    </>
  );
};

export function Portfolio({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  });
  return (
    <>
      <div className={`min-h-screen dark:bg-gray-900 dark:text-white`}>
        {loading ? <Loader /> : <Component {...pageProps} />}{" "}
      </div>
    </>
  );
}

export default Portfolio;
