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
      className={`${className} text-sm font-semibold transition-all text-gray-200 px-2 p-1 h-8 rounded bg-blue-700 hover:bg-blue-600 shadow-xl shadow-blue-700/50`}
    >
      {name}
    </button>
  </>
);

export default Button;
