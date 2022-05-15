import React from "react";

type ProjectProps = {
  role?: string;
  color?: string;
  title?: string;
  purpose?: string;
  gradient?: string;
  paragraph?: string;
  className?: string;
};

const Project = ({
  role,
  title,
  color,
  purpose,
  gradient,
  paragraph,
  className,
}: ProjectProps) => (
  <>
    <div
      className={`bg-gray-300 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 duration-300 p-3 rounded-[2px] md:max-w-md ${className} select-none`}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold dark:text-gray-300 text-neutral-700">
          <span className={`${color} transition-colors cursor-pointer`}>
            {title}
          </span>{" "}
          - {purpose}
        </p>
        <span
          className={`font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-tr ${gradient}`}
        >
          {role}
        </span>
      </div>
      <p className="dark:text-gray-200 text-gray-700 mt-2">{paragraph}</p>
    </div>
  </>
);

export default Project;
