import Headline from "@/components/ui/Headline";
import { FC } from "react";
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

interface ProjectsProps {}
interface ProjectProps {
  image: StaticImageData;
  title: string;
  github: string;
  link: string;
  type: string;
  summary?: string;
}

{
  /* <p>{`
      The frontend, on the other hand, was developed using React.js, TailwindCSS, and Redux, providing a better user interface with reusable components. Both the frontend and backend were fully written in TypeScript, ensuring type safety and code clarity.`}</p>
          <p>
            {`
      One of the key features of this application is its secure authentication system, which was implemented using JWT and HTTP only cookies. This system ensures access control and data protection, safeguarding user data from unauthorized access.`}
          </p> */
}

const FeaturedProject: FC<ProjectProps> = ({
  image,
  title,
  type,
  summary,
  github,
  link,
}) => {
  return (
    <article className="flex items-center justify-center w-full gap-8 p-12 border border-solid shadow-2xl border-dark/25 rounded-xl">
      <Image alt="project" src={image} className="w-1/2 rounded-lg" />
      <div className="flex flex-col items-start justify-between w-1/2 gap-4">
        <span className="text-xl font-semibold text-purple-600">{type}</span>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex flex-col items-start justify-between gap-4 text-base font-medium">
          <p className="">{summary}</p>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Link href={github} target="_blank" className="w-10 h-auto">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 px-4 py-2 font-semibold border-2 rounded-md bg-dark text-light hover:bg-light hover:text-dark border-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project: FC<ProjectProps> = ({ image, title, type, github, link }) => {
  return (
    <article className="flex flex-col items-center justify-center w-full gap-8 p-6 border border-solid shadow-2xl rounded-2xl">
      <Image alt="project" src={image} className="w-full rounded-lg" />
      <div className="flex flex-col items-start justify-between w-full gap-4">
        <span className="text-xl font-semibold text-purple-600">{type}</span>
        <h1 className="text-3xl font-bold">{title}</h1>

        <div className="flex items-center justify-between w-full gap-4 mt-2">
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold border-2 rounded-full bg-light text-dark hover:bg-light hover:text-dark border-dark"
          >
            Visit
          </Link>
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
        <div className="flex justify-center pt-36">
          <Headline title="My Projects" />
        </div>
        <div className="grid grid-cols-12 pb-20 mt-16 gap-y-40 gap-x-24">
          <motion.div
            className="col-span-12"
            initial={{ y: -600, opacity: 0 }}
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
            />
          </motion.div>
          <motion.div
            className="col-span-6"
            initial={{ x: 800, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Project
              image={NetflixImage}
              type="React Project"
              title="Netflix clone"
              github="https://github.com/shemilkumar/netflix-clone"
              link="http://netflix-clone-5d65d.web.app/"
            />
          </motion.div>
          <motion.div
            className="col-span-6"
            initial={{ x: -800, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Project
              image={BlackJackImage}
              type="Vanila Javascript Project"
              title="BlackJack - Online Web Game"
              github="https://github.com/shemilkumar/BlackJack-webgame"
              link="https://blackjack-webgame.netlify.app/"
            />
          </motion.div>
          <motion.div
            className="col-span-12"
            initial={{ y: 600, opacity: 0 }}
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
            />
          </motion.div>
          <motion.div
            className="col-span-6"
            initial={{ x: 400, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Project
              image={ForkifyImage}
              type="Vanila Javascript Project"
              title="Forkify - Food Recipe Website"
              github="https://github.com/shemilkumar/forkify"
              link="https://forkify-shemil.netlify.app"
            />
          </motion.div>
          <motion.div
            className="col-span-6"
            initial={{
              x: -400,
              opacity: 0,
              display: "hidden",
              // visibility: "hidden",
            }}
            whileInView={{
              x: 0,
              display: "visible",
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Project
              image={NatoursImage}
              type="Node.js Project"
              title="Natours - Tour Booking Application"
              github="https://github.com/shemilkumar/natours"
              link="http://natours-shemil.cyclic.app/"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Projects;
