import { ButtonOutline } from "./ui/Button";
import { GithubIcon } from "./assests/Icons";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import SkillSetListing from "./SkillSetListing";
import { ProjectProps } from "./FeaturedProject";

const Project: FC<ProjectProps> = ({
  image,
  title,
  type,
  github,
  link,
  technologies,
}) => {
  return (
    <article className="flex flex-col items-center justify-center w-full gap-8 p-6 border border-solid shadow-2xl dark:shadow-b-lg rounded-2xl dark:shadow-purple-300 xs:p-4 md:shadow-lg">
      <Link
        href={link}
        target="_blank"
        className="relative w-full xl:w-[90%] md:w-full"
      >
        <SkillSetListing technologies={technologies} />
        <Image
          alt="project"
          src={image}
          className="w-full rounded-lg "
          priority
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full gap-4">
        <span className="text-xl font-semibold text-transparent bg-purple-600 bg-gradient-to-tr from-purple-600 to-blue-600 bg-clip-text lg:text-lg">
          {type}
        </span>
        <h1 className="text-3xl font-bold 2xl:text-2xl xl:text-xl">{title}</h1>

        <div className="flex items-center justify-between w-full gap-4 mt-2">
          <ButtonOutline text="Visit" href={link} />

          <Link
            href={github}
            target="_blank"
            className="w-8 h-auto hover:scale-110"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
