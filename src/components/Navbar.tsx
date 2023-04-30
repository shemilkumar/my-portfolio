import { FC, useEffect, useState } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./assests/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDarkMode } from "usehooks-ts";
import checkTheme from "@/util/themeCheck";
import useTheme from "./hooks/useTheme";

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
          router.asPath === href ? "text-dark dark:text-light" : ""
        } cursor-pointer ${className}`}
      >
        {text}
      </Link>
    </>
  );
};

const Navbar: FC<NavbarProps> = ({}) => {
  // const darkThemeFromStorage =
  //   typeof window !== "undefined" &&
  //   window.localStorage.getItem("usehooks-ts-dark-mode");
  // const [theme, setTheme] = useState<string>("");

  // useEffect(() => {
  //   if (darkThemeFromStorage === "true") setTheme("dark");
  //   else setTheme("light");
  //   checkTheme();
  // }, [darkThemeFromStorage]);

  const theme = useTheme();
  const { toggle } = useDarkMode();

  const hadleTheme = () => {
    toggle();
    checkTheme();
  };

  return (
    <>
      <motion.header
        className="absolute z-10 flex items-center justify-end w-full gap-8 py-6 text-lg font-semibold text-dark/70 dark:text-light/70"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <NavigationLink text="Home" href="/" />
        <NavigationLink text="About" href="/about" />
        <NavigationLink text="Projects" href="/projects" />
        <NavigationLink text="Contact" href="/contact" />

        <button
          className={`flex items-center justify-center p-1 rounded-full
        ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
          onClick={hadleTheme}
        >
          {theme === "dark" ? (
            <MoonIcon className="fill-dark" />
          ) : (
            // <LinkedInIcon />
            <SunIcon className="fill-dark" />
            // <GithubIcon />
          )}
        </button>
      </motion.header>
    </>
  );
};

export default Navbar;
