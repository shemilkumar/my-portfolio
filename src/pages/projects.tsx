import { FC } from "react";
import { HeadlineAnimated } from "@/components/ui/Headline";
import { fastContainer, fastItem } from "@/util/staggeredAnimation";

import StayHubImage from "../../public/img/StayHub-min.png";
import ShopspotImage from "../../public/img/Shopspot-min.png";
import BlackJackImage from "../../public/img/BlackJack-min.png";
import NetflixImage from "../../public/img/Netflix-min.png";
import NatoursImage from "../../public/img/Natours-min.png";
import ForkifyImage from "../../public/img/Forkify-min.png";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/assests/Icons";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import Button, { ButtonOutline } from "@/components/ui/Button";

interface ProjectsProps {}
interface ProjectProps {
  image: StaticImageData;
  title: string;
  github: string;
  link: string;
  type: string;
  summary?: string;
  technologies?: string[];
}

const SkillSetListing = ({ technologies }: { technologies?: string[] }) => {
  return (
    <motion.div
      className="absolute flex flex-wrap items-center justify-center w-full h-full p-12 bg-dark/70"
      variants={fastContainer}
      initial="hidden"
      whileHover="show"
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies &&
          technologies.map((technology, i) => {
            return (
              <motion.span
                key={i}
                className="px-2 py-1 text-sm font-semibold rounded-lg text-light bg-gradient-to-r from-blue-700 to-purple-700"
                variants={fastItem}
              >
                {technology}s
              </motion.span>
            );
          })}
      </div>
    </motion.div>
  );
};

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
    <motion.article className="flex items-center justify-center w-full gap-8 p-12 border border-solid shadow-2xl xl:py-16 xl:flex-col border-dark/25 dark:shadow-purple-300 rounded-xl md:p-8 xs:p-4 sm:gap-4 md:shadow-lg">
      <Link
        href={link}
        target="_blank"
        className="relative w-1/2 xl:w-[90%] md:w-full"
      >
        <SkillSetListing technologies={technologies} />
        <Image alt="project" src={image} className="w-full rounded-lg" />
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
        <Image alt="project" src={image} className="w-full rounded-lg " />
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

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <>
      <SEO pageTitle="Projects | Shemil" pageDescription="" />
      <main className="w-full">
        <HeadlineAnimated
          title="My Projects"
          className="pt-36 lg:pt-20 md:pt-14"
        />
        <div className="grid w-full grid-cols-12 pb-20 mt-16 md:mt-10 gap-y-40 xl:gap-y-20 md:gap-y-6">
          <motion.div
            className="w-full col-span-12"
            initial={{ y: -400, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <FeaturedProject
              image={StayHubImage}
              type="Featured MERN Project"
              title="StayHub - Home Booking Application"
              summary={`A feature-rich online Home booking web applicationb built using MERN stack. The backend of this application was developed using Express in Node.js, with MongoDB for database management. The frontend, on the other hand, was developed using React.js, TailwindCSS, and Redux, providing a better user interface with reusable components. Both the frontend and backend were fully written in TypeScript, ensuring type safety and code clarity.`}
              github="https://github.com/shemilkumar/StayHub"
              link="https://stayhub.shemilkumar.com"
              technologies={[
                "Typescript",
                "Node.js",
                "React.js",
                "Redux",
                "Express",
                "MongoDB",
                "REST API",
                "JWT",
                "AWS",
              ]}
            />
          </motion.div>

          <div className="flex col-span-12 gap-20 xl:gap-12 lg:gap-6 md:flex-col">
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={NetflixImage}
                type="React Project"
                title="Netflix clone"
                github="https://github.com/shemilkumar/netflix-clone"
                link="http://netflix-clone-5d65d.web.app/"
                technologies={["React.js", "Firebase", "CSS", "Git", "API"]}
              />
            </motion.div>
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={BlackJackImage}
                type="Vanila Javascript Project"
                title="BlackJack - Online Web Game"
                github="https://github.com/shemilkumar/BlackJack-webgame"
                link="https://blackjack-webgame.netlify.app/"
                technologies={[
                  "Javascript",
                  "ES06",
                  "CSS & HTML",
                  "Git",
                  "Parcel",
                ]}
              />
            </motion.div>
          </div>

          <motion.div
            className="col-span-12"
            initial={{ y: 400, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <FeaturedProject
              image={ShopspotImage}
              type="Featured React Project"
              title="Shopspot - Ecommerce Website"
              summary={`A Stunning E-commerce Website built using ReactJS, Redux,React Router, TailwindCSS and Firebase. It offers advanced features such as product browsing, search, filtering and sorting, shopping cart, and user account creation. The project also boasts a responsive design, dark mode, and integration with the dummyjson API. It showcases my ability to deliver high-quality web applications that meet and exceed user expectations.`}
              github="https://github.com/shemilkumar/shopspot"
              link="https://shopspot-shemil.vercel.app/"
              technologies={[
                "React.js",
                "Redux",
                "TailwindCSS",
                "Firebase",
                "Javascript",
                "Git",
                "API",
              ]}
            />
          </motion.div>

          <div className="flex col-span-12 gap-20 xl:gap-12 lg:gap-6 md:flex-col">
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={ForkifyImage}
                type="Vanila Javascript Project"
                title="Forkify - Food Recipe Website"
                github="https://github.com/shemilkumar/forkify"
                link="https://forkify-shemil.netlify.app"
                technologies={[
                  "Vanila Javascript",
                  "CSS & HTML",
                  "MVC",
                  "Git",
                  "API",
                ]}
              />
            </motion.div>
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={NatoursImage}
                type="Node.js Project"
                title="Natours - Tour Booking Website"
                github="https://github.com/shemilkumar/natours"
                link="http://natours-shemil.cyclic.app/"
                technologies={[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST API",
                  "PUG",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
