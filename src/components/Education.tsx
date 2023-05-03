import { FC, useRef } from "react";
import Headline, { HeadlineAnimated } from "./ui/Headline";
import ProfessionalDetails from "./ProfessionalDetails";
import { motion, useScroll } from "framer-motion";

interface EducationProps {}

const Education: FC<EducationProps> = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <article className="w-full mb-72 lg:mb-64 sm:mb-56">
      <HeadlineAnimated
        title="Education"
        className="my-24 text-center xs:my-14 lg:my-16"
      />

      <div
        ref={ref}
        className="relative w-[60%] lg:w-[80%] md:w-[90%] sm:w-[95%] mx-auto mb-20"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] bg-dark dark:bg-light h-full left-9 top-0 origin-top
          md:w-[4px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="flex flex-col items-start w-full gap-8 ml-4">
          <ProfessionalDetails
            company="Master of Computer Science"
            position="Jain University"
            time="2021 - Present"
            place="Bangalore"
            info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Programming languages.`}
          />

          <ProfessionalDetails
            company="Bachelor of Computer Science"
            position="Calicut University"
            time="2018 - 2021"
            place="Thrissur, Kerala"
            info={`Completed a Bachelor's project on native Android, developed a Pothole finder mobile application using Android studio and Firebase Realtime database`}
          />

          <ProfessionalDetails
            company="Higher Secondary"
            position="VBHSS Thrissur"
            time="2016 - 2018"
            place="Thrissur, Kerala"
            info={`Syllabus included Fundamentals of programming using C++, RDMS Basics and Web development`}
          />
        </ul>
      </div>
    </article>
  );
};

export default Education;
