import SEO from "@/components/SEO";
import coverPhoto from "../../public/coverPhoto-1.jpg";
import Image from "next/image";
import { FC } from "react";
import Headline from "@/components/ui/Headline";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

interface aboutProps {}

const about: FC<aboutProps> = ({}) => {
  return (
    <>
      <SEO
        pageTitle="About | Shemil"
        pageDescription="About page of portfolio"
      />
      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        <div className="mt-32">
          <Headline title="About ME" />
        </div>

        <div className="grid grid-cols-12 p-24">
          <div className="flex flex-col col-span-6 xl:pl-48 lg:pl-12">
            <h2 className="mb-4 font-semibold text-dark/75">Biography</h2>
            <div className="flex flex-col justify-between gap-8 font-normal">
              <p>
                {`Hi, I'm Shemil, As a self-learned MERN stack developer, I have a passion for creating dynamic, responsive and user-friendly web applications. I have invested significant time and effort in learning the MERN (MongoDB, Express, React, Node.js) stack, and have gained a strong understanding of each of its components.`}
              </p>
              <p>
                {`I am proficient in front-end development and back-end development using React and Node.js and Express. I have experience with Redux and have implemented responsive designs using TailwindCSS. Also I have designed and implemented RESTful APIs, and have experience working with MongoDB to manage databases and data models.`}
              </p>
              <p>
                {`Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center col-span-6">
            <Image
              src={coverPhoto}
              alt="coverPhoto"
              className="h-auto xl:w-1/2 lg:w-full rounded-xl"
            />
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;
