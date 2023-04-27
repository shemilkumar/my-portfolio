import { motion } from "framer-motion";
import { FC } from "react";

interface HeadlineProps {
  title: string;
  className?: string;
}

const Headline: FC<HeadlineProps> = ({ title, className = "" }) => {
  return (
    <motion.h1 className="text-5xl font-bold uppercase">{title}</motion.h1>
  );
};

export default Headline;
