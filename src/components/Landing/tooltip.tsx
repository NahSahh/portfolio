import { ReactNode } from "react";

interface TooltipProps {
  text?: string;
  icon?: ReactNode;
  clicker?: () => void;
}

const tooltip = ({ icon, text, clicker }: TooltipProps) => {
  return (
    <div
      onClick={clicker}
      className=" flex items-center justify-center p-2 hover:bg-blue-700 bg-zinc-800 text-white hover:rounded-xl hover:shadow-blue-700/50 rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    >
      {icon}
      <div className="absolute p-2 max-w-sm mt-24 rounded shadow-lg text-white bg-slate-800 text-sm font-semibold transition-all duration-300 scale-0 group-hover:scale-100">
        {text}
      </div>
    </div>
  );
};

export default tooltip;
