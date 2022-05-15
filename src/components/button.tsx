import React from "react";

type buttonProps = {
  onClick?: () => void;
  name?: string;
  className?: string;
};

const Button = ({ name, className, onClick }: buttonProps) => (
  <>
    <button
      onClick={onClick}
      className={`${className} text-sm font-semibold transition-all dark:text-gray-200 px-2 p-1 h-8 bg-blue-300 hover:bg-blue-400 rounded dark:bg-blue-700 dark:hover:bg-blue-600 text-zinc-700 shadow-xl shadow-blue-300/40 dark:shadow-blue-700/50`}
    >
      {name}
    </button>
  </>
);

export default Button;
