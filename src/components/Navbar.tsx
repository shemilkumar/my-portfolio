import { FC } from "react";
import { MoonIcon } from "./assests/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface NavbarProps {}

interface NavigationLinkProps {
  text: string;
  href: string;
  className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  text,
  href,
  className = "",
}) => {
  const router = useRouter();

  return (
    <>
      <Link
        href={href}
        className={`${
          router.asPath === href ? "text-dark" : ""
        } cursor-pointer ${className}`}
      >
        {text}
      </Link>
    </>
  );
};

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <motion.header
        className="absolute z-10 flex items-center justify-end w-full gap-8 py-6 text-lg font-semibold text-dark/70"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <NavigationLink text="Home" href="/" />
        <NavigationLink text="About" href="/about" />
        <NavigationLink text="Projects" href="/project" />
        <NavigationLink text="Contact" href="/contact" />
        <div className="w-8 p-1 rounded-full bg-dark text-light">
          <MoonIcon className="" />
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
