import { FC, useRef } from "react";
import Headline, { HeadlineAnimated } from "./ui/Headline";
import ProfessionalDetails from "./ProfessionalDetails";
import { motion, useScroll } from "framer-motion";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <article className="w-full">
      <HeadlineAnimated
        title="Experience"
        className="mt-32 mb-20 lg:mt-16 lg:mb-12"
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

        <ul className="flex flex-col items-start w-full ml-4">
          <ProfessionalDetails
            company="TCS"
            position="Programmer"
            time="2022 - Present"
            place="New Delhi"
            info={`Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.`}
            link="https://www.tcs.com"
          />

          <ProfessionalDetails
            position="Graduate Trainee"
            time="2021 - 2022"
            place="New Delhi"
            info={`Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.`}
            link="www.tcs.com"
          />
        </ul>
      </div>
    </article>
  );
};

export default Experience;
