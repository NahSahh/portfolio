export default function Hero() {
  return (
    <div>
      <div className="max-w-md max-h-80">
        {" "}
        <img
          alt=""
          src={`nahsahh.png`}
          className="rounded-xl hover:shadow-[#19418c] hover:-translate-y-1  shadow-lg duration-300"
        />
      </div>

      <div>
        <h1 className="text-2xl font-semibold italic dark:text-gray-200 mt-3 flex gap-1">
          Hey! I&apos;m{" "}
          <span className="text-violet-400 transform transition-all cursor-cell flex hover:-rotate-6 hover:text-violet-600">
            {process.env.userName}
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
    </div>
  );
}
