import { FC } from "react";
import { HeadlineAnimated } from "./ui/Headline";
import { motion } from "framer-motion";

interface SkillsProps {}

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer text-light bg-dark dark:text-dark dark:bg-light shadow-dark dark:shadow-light"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <article className="w-full mt-12">
      <HeadlineAnimated title="Skills" className="my-12 " />

      <div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center w-16 h-16 p-8 font-semibold bg-yellow-500 rounded-full cursor-pointer text-light shadow-dark"
          whileHover={{
            scale: 1.1,
            backgroundColor: [
              "rgb(234,179,8)",
              "#FEF001",
              "#FFCE03",
              "#FD9A01",
              "#FD6104",
              "#FF2C05",
              "#F00505",
            ],
            transition: { duration: 1 },
          }}
        >
          Web
        </motion.div>

        <Skill name={"Typescript"} x={"-5vw"} y={"-11vw"} />
        <Skill name={"Node"} x={"-20vw"} y={"-2vw"} />
        <Skill name={"MongoDB"} x={"22vw"} y={"7vw"} />
        <Skill name={"Javascript"} x={"6vw"} y={"8vw"} />
        <Skill name={"Redux"} x={"-23vw"} y={"-16vw"} />
        <Skill name={"Express"} x={"18vw"} y={"-14vw"} />
        <Skill name={"React"} x={"-12vw"} y={"5vw"} />
        <Skill name={"Next"} x={"13vw"} y={"-5vw"} />
        <Skill name={"CSS"} x={"32vw"} y={"-5vw"} />
        <Skill name={"TailwindCSS"} x={"0vw"} y={"-21vw"} />
        <Skill name={"AWS"} x={"-25vw"} y={"18vw"} />
        <Skill name={"Git"} x={"-7vw"} y={"14vw"} />
        <Skill name={"REST"} x={"18vw"} y={"18vw"} />
        <Skill name={"HTML"} x={"-35vw"} y={"4vw"} />
      </div>
    </article>
  );
};

export default Skills;
