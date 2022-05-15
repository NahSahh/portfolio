import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}
