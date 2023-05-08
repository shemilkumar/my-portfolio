import { motion } from "framer-motion";
import Button from "./ui/Button";
import { GithubIcon } from "./assests/Icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import SkillSetListing from "./SkillSetListing";

export interface ProjectProps {
  image: StaticImageData;
  title: string;
  github: string;
  link: string;
  type: string;
  summary?: string;
  technologies?: string[];
}

const FeaturedProject: FC<ProjectProps> = ({
  image,
  title,
  type,
  summary,
  github,
  link,
  technologies,
}) => {
  return (
    <motion.article className="flex items-center justify-center w-full gap-8 p-12 border border-solid shadow-2xl xl:py-16 xl:flex-col border-dark/25 rounded-xl md:p-8 xs:p-4 sm:gap-4 md:shadow-lg">
      <Link
        href={link}
        target="_blank"
        className="relative w-1/2 xl:w-[90%] md:w-full"
      >
        <SkillSetListing technologies={technologies} />
        <Image
          alt="project"
          src={image}
          className="w-full rounded-lg"
          priority={true}
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 xl:w-[90%] md:w-full gap-4 sm:gap-2">
        <span className="text-xl font-semibold text-transparent bg-purple-600 bg-gradient-to-tr from-purple-600 to-blue-600 bg-clip-text lg:text-lg">
          {type}
        </span>
        <h1 className="text-3xl font-bold sm:text-2xl xs:text-xl">{title}</h1>
        <div className="flex flex-col items-start justify-between gap-4 text-base font-medium">
          <p className="sm:text-sm xs:text-xs">{summary}</p>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Link href={github} target="_blank" className="w-10 h-auto">
            <GithubIcon />
          </Link>

          <Button text="Visit Project" href={link} />
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
