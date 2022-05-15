import Button from "../button";

const Navbar = () => {
  return (
    <div className="text-lg w-full sticky z-50 bg-slate-200 p-4 dark:bg-slate-800 flex items-center gap-2 justify-between">
      <h1 className="font-semibold dark:text-gray-300 hover:text-violet-600 transition-all duration-300 cursor-pointer">
        {process.env.userName}
      </h1>
      <div>
        <Button
          name="Projects"
          onClick={() => {
            window.scroll({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
