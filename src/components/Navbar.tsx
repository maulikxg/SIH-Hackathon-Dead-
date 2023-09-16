import Icon from "./Icons";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-black text-white p-2">
      <div className="flex items-center justify-center m-auto py-4 px-2 gap-3">
        <Icon.logo className="h-6 w-6" />
        <p className="font-semibold text-xl">App</p>
      </div>
    </nav>
  );
};

export default Navbar;
