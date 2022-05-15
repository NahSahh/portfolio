import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="m-auto flex flex-col items-center">
        <span className="mt-2 animate-pulse text-lg text-gray-300 font-semibold">
          Loading
        </span>
      </div>
    </div>
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
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        {loading ? <Loader /> : <Component {...pageProps} />}
      </div>
    </>
  );
}

export default Portfolio;
