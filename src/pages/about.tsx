import SEO from "@/components/SEO";
import coverPhoto from "../../public/coverPhoto-1.jpg";
import Image from "next/image";
import { FC } from "react";
import Headline, { HeadlineAnimated } from "@/components/ui/Headline";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

interface aboutProps {}

const about: FC<aboutProps> = ({}) => {
  return (
    <>
      <SEO
        pageTitle="About | Shemil"
        pageDescription={
          "Discover how Shemilkumar, an experienced MERN stack developer with expertise in JavaScript, React, Node.js, and MongoDB, can help you build dynamic and responsive web applications that drive results. Explore his portfolio and achievements, and contact him to learn more."
        }
      />
      <main className="flex flex-col items-center justify-center w-full">
        <HeadlineAnimated title="About ME" className="mt-32 lg:mt-14" />

        <div className="grid grid-cols-12 px-32 py-24 md:py-8 2xl:px-20 xl:px-2">
          <motion.div
            className="flex flex-col col-span-6 lg:col-span-12 lg:order-2 lg:px-16 lg:pt-4 xs:px-4"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 font-semibold text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <div className="flex flex-col justify-between gap-8 font-normal lg:text-sm">
              <p>
                {`Hi, I'm Shemil, As a self-learned MERN stack developer, I have a passion for creating dynamic, responsive and user-friendly web applications. I have invested significant time and effort in learning the MERN (MongoDB, Express, React, Node.js) stack, and have gained a strong understanding of each of its components.`}
              </p>
              <p>
                {`I am proficient in front-end development and back-end development using React and Node.js and Express. I have experience with Redux and have implemented responsive designs using TailwindCSS. Also I have designed and implemented RESTful APIs, and have experience working with MongoDB to manage databases and data models.`}
              </p>
              <p className="md:hidden">
                {`Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center col-span-6 lg:col-span-12 lg:order-1 "
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={coverPhoto}
              alt="coverPhoto"
              className="w-3/4 p-2 border border-solid md:5/6 lg:w-1/2 xl:w-11/12 rounded-xl dark:bg-light border-dark/50 xs:w-11/12"
              priority={true}
            />
          </motion.div>
        </div>

        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;
