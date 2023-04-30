import HireMe from "@/components/assests/HireMe";
import { CircularText, LinkArrow } from "@/components/assests/Icons";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import { slowContainer, slowItem } from "@/util/staggeredAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <motion.div
        className="flex flex-col items-center justify-center gap-4 overflow-hidden"
        variants={slowContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col gap-4" variants={slowItem}>
          <Headline title="Hey, I'm Shemil," />
          <Headline title="Full stack developer" />
        </motion.div>

        <motion.pre className="text-2xl" variants={slowItem}>
          {`I’m a MERN stack developer & love to <code />`}
        </motion.pre>

        <motion.div
          className="flex items-center gap-4 mt-4 cursor-pointer"
          variants={slowItem}
        >
          <Button
            text="Resume"
            icon={<LinkArrow className="w-6" />}
            href={"/Resume.pdf"}
          />

          <Link
            href={"/contact"}
            className="flex items-center gap-1 cursor-pointer border-dark"
          >
            <div className="underline underline-offset-4">Contact</div>
            <div className="text-2xl">{">"}</div>
          </Link>
        </motion.div>
      </motion.div>

      <HireMe />
    </main>
  );
}
