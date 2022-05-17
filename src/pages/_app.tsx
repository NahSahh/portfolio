import Head from "next/head";
import "../styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <>
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
      <NextSeo
        title={process.env.userName}
        description={`${process.env.userName}'s site, you should use Kythi.com btw.`}
        additionalMetaTags={[
          {
            property: "theme-color",
            content: "#5E81AC",
          },
        ]}
        openGraph={{
          title: process.env.userName,
          description:
            process.env.userName + "'s site, you should use Kythi.com btw.",
          images: [
            {
              url: "/nahsahh.png",
              width: 600,
              height: 600,
              alt:
                process.env.userName + "'s site, you should use Kythi.com btw.",
            },
          ],
        }}
      />
      <div className={`min-h-screen dark:bg-gray-900 dark:text-white`}>
        {loading ? <Loader /> : <Component {...pageProps} />}{" "}
      </div>
    </>
  );
}

export default Portfolio;
