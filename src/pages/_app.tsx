import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <body className="h-screen dark:bg-slate-900 dark:text-white">
        <Component {...pageProps} />
      </body>
    </>
  );
}
