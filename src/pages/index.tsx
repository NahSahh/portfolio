import Head from "next/head";
import Card from "../components/projectCard";
import Navbar from "../components/navbar";

export default function home() {
  return (
    <>
      <Head>
        <title>NahSahh</title>
        <meta name="title" content="NahSahh's Portfolio site" />
        <meta
          name="description"
          content="NahSahh's site, you should use Kythi.com btw."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bootstrapcss.modal flex items-center justify-center mt-24 flex-col px-12 pb-8 scroll-smooth">
        <div className="max-w-7xl flex flex-col w-full">
          <div className="max-w-md max-h-80">
            {" "}
            <img
              alt=""
              src="/nahsahh.png"
              className="rounded-xl  hover:shadow-[#19418c] hover:-translate-y-1  shadow-lg duration-300"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold italic dark:text-gray-200 mt-3 flex gap-1">
              Hey! I&apos;m{" "}
              <span className="text-violet-400 transform transition-all cursor-cell flex hover:-rotate-6 hover:text-violet-600">
                NahSahh
              </span>
            </h1>
            <p className="dark:text-gray-300 mt-2 text-lg max-w-lg">
              I&apos;m a web developer based in the UK and I prefer to use{" "}
              <button
                onClick={() => open("https://tailwindcss.com")}
                className="dark:text-blue-300 text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer active:translate-y-[1px]"
              >
                TailwindCSS
              </button>{" "}
              and{" "}
              <button
                onClick={() => open("https://nextjs.com")}
                className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-600 hover:text-blue-700  cursor-pointer active:translate-y-[1px]"
              >
                NextJS
              </button>{" "}
              to build my Websites with.
            </p>
          </div>
          <div className="flex flex-col md:ml-auto">
            <div className="flex flex-col ml-auto max-w-md">
              <h1 className="text-3xl font-semibold mt-56 mb-3 dark:text-gray-200 flex gap-2">
                My
                <span className="text-violet-400 transform transition-all cursor-cell flex hover:text-violet-600">
                  Projects
                </span>
              </h1>

              <div className="text-lg mt-2 dark:text-gray-300">
                Over the past few month's I've taken on mutliple Frontend
                projects most of which related to file hosting, some of them are
                listed below.
              </div>
            </div>
            <div className="max-w-4xl">
              <div className="grid md:grid-cols-2 gap-2 mt-4">
                <Card
                  title="Kythi"
                  role="Founder"
                  link="https://discord.gg/Fa7t67NEMU"
                  gradient="dark:from-blue-300 dark:to-pink-900 from-emerald-400 to-emerald-900"
                  color="dark:text-blue-300 dark:hover:text-blue-400 text-red-500 hover:text-red-600"
                  purpose="Public File-Uploader."
                  paragraph="Kythi is a public free-to-use file-uploader that allows you to
                upload images and share them with anyone, along with customized
                embeds to make them look like you want."
                />

                <Card
                  title="Kraken"
                  role="Developer"
                  link="https://kraken.pics"
                  gradient="dark:from-blue-400 dark:to-blue-900 from-indigo-400 to-violet-900"
                  color="dark:text-indigo-300 dark:hover:text-indigo-400 text-blue-500 hover:text-blue-600"
                  purpose="File Uploader."
                  paragraph="Kraken is a public file-uploader, used to store files and customise embeds, with the choice of custom domains, allowing you to personalise your images your way."
                />
              </div>
              <div className="mt-2">
                <Card
                  title="E-Z.host"
                  role="Developer"
                  link="https://e-z.host/"
                  gradient="dark:from-red-400 dark:to-red-900 from-blue-400 to-red-600"
                  color="dark:text-red-300 dark:hover:text-red-400 text-emerald-500 hover:text-emerald-600"
                  purpose="Private File Uploader."
                  paragraph="E-Z.host is a closed-private file-uploader, used to store uploads and customise embeds, it has a plethora of features to choose from allowing you to personalise your files, you can purchase it on their website."
                  className=""
                />{" "}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
