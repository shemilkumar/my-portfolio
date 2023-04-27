import { LinkArrow } from "@/components/assests/Icons";
import Headline from "@/components/ui/Headline";
import { motion } from "framer-motion";
export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "-50px" },
    show: { opacity: 1, y: "0px", transition: { duration: 1 } },
  };

  return (
    <main>
      <motion.div
        className="flex flex-col items-center justify-center h-screen gap-4 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col gap-4" variants={item}>
          <Headline title="Hey, I'm Shemil," />
          <Headline title="Full stack developer" />
        </motion.div>

        <motion.pre className="text-2xl" variants={item}>
          {`I’m a MERN stack developer & love to <code />`}
        </motion.pre>

        <motion.div
          className="flex items-center gap-4 mt-4 cursor-pointer"
          variants={item}
        >
          <div className="flex items-center gap-1 px-4 py-2 font-semibold rounded-md bg-dark text-light">
            Resume
            <LinkArrow className="w-6" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer border-dark">
            <div className="underline underline-offset-4">Contact</div>
            <div className="text-2xl">{">"}</div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
