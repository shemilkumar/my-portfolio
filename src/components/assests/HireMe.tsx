import { FC, useEffect } from "react";
import { MyCircularText } from "./Icons";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

interface HireMeProps {}

const HireMe: FC<HireMeProps> = ({}) => {
  const [scope, animate] = useAnimate();
  // const FallingAnimation = async () => {
  //   await animate(scope.current, { bottom: 0 });
  //   await animate(scope.current, { bottom: 300 });
  //   await animate(scope.current, { bottom: 0 });
  //   animate(
  //     scope.current,
  //     {
  //       // x: 100,
  //       bottom: [1000, 0, 100, 0],
  //     },
  //     {
  //       // repeat: 1,
  //       type: "tween",
  //       repeatType: "mirror",
  //       ease: "easeInOut",
  //       duration: 3,
  //     }
  //   );
  // };

  // useEffect(() => {
  //   FallingAnimation();
  // });

  return (
    <motion.div
      ref={scope}
      className="fixed flex items-center justify-center overflow-hidden bottom-4 left-4"
      initial={{ bottom: 950 }}
      animate={{ bottom: 0 }}
      transition={{
        type: "spring",
        duration: 6,
        bounce: 0.7,
      }}
    >
      <div className="relative flex items-center justify-center h-auto w-36">
        <MyCircularText className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:shemil0055@gmail.com"
          className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-xl bg-dark text-light border-dark top-1/2 left-1/2 hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </motion.div>
  );
};

export default HireMe;
