import React from "react";

type ProjectProps = {
  link?: string;
  role?: string;
  title?: string;
  purpose?: string;
  paragraph?: string;
  className?: string;
};

const Project = ({
  link,
  role,
  title,
  purpose,
  paragraph,
  className,
}: ProjectProps) => (
  <>
    <div
      className={`bg-gray-300 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 duration-300 p-3 rounded-[2px] ${className} select-none`}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold dark:text-gray-300 text-neutral-700">
          <span
            onClick={() => open(link)}
            className={`dark:text-blue-300 dark:hover:text-blue-400 transition-colors cursor-pointer`}
          >
            {title}
          </span>{" "}
          <span className="mr-2">- {purpose}</span>
        </p>
        <div
          className={`bg-gradient-to-br from-slate-900 to-blue-800 p-1 h-7 text-sm text-violet-200 font-bold px-3 rounded`}
        >
          {role}
        </div>
      </div>
      <p className="dark:text-gray-200 text-gray-700 mt-2">{paragraph}</p>
    </div>
  </>
);

export default Project;
