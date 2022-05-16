import Head from "next/head";
import { useEffect } from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";
import Project from "../components/Landing/projectSection";

export default function home() {
  useEffect(() => console.log(process.env.cards), []);

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bootstrapcss.modal lol flex items-center justify-center mt-24 flex-col px-12 scroll-smooth">
        <div className="max-w-7xl flex flex-col w-full mt-12">
          <Hero />
          <Project />
        </div>
        <div className="flex ml-auto mt-12 sm:text-lg text-sm items-center pb-4">
          This site is
          <span
            onClick={() => open("https://github.com/NahSahh/portfolio")}
            className="flex items-center cursor-pointer hover:text-blue-400 duration-300 text-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
              />
            </svg>
            <span className="ml-1 mr-2 hover:text-blue-300 text-blue-400 hover:underline transition-all duration-400">
              {" "}
              open source!
            </span>
          </span>
          on my github.
        </div>
      </div>
    </>
  );
}
