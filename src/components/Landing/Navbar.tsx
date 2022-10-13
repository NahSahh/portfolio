import Button from "../button";

const Navbar = () => {
  return (
    <div className="text-lg w-full fixed z-50 bg-zinc-800/50 border-b-2 border-b-zinc-800 p-4 flex items-center gap-2 justify-between backdrop-blur-sm">
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
