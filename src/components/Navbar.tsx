import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    // <>
    <header className="absolute z-10 flex items-center justify-end w-full gap-8 py-6 text-lg font-semibold text-dark/75">
      <nav>Home</nav>
      <nav>About</nav>
      <nav>Projects</nav>
      <nav>Contact</nav>
      {/* <nav className="w-12 h-12 text-white rounded-full bg-dark ">Dark</nav> */}
    </header>
    // </>
  );
};

export default Navbar;
