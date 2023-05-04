import { motion } from "framer-motion";
import { fastContainer, fastItem } from "@/util/staggeredAnimation";

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

export default SkillSetListing;
