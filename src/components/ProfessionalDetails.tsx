import Link from "next/link";
import { FC, useRef } from "react";
import LiIcon from "./assests/LiIcon";
import { motion } from "framer-motion";

interface DetailsProps {
  details: {
    position: string;
    time: string;
    info: string;
    place: string;
  };
}

interface professionalDetailsProps {
  company?: string;
  link?: string;
  position: string;
  time: string;
  info: string;
  place: string;
}

const Details: FC<DetailsProps> = ({ details }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold lg:text-base">{details.position}</h2>
      <div className="text-base md:text-sm xs:text-xs text-dark/75 dark:text-light/75">{`${details.time} | ${details.place}`}</div>
      <p className="mt-1 text-base font-normal md:text-sm xs:text-xs">
        {details.info}
      </p>
    </div>
  );
};

const ProfessionalDetails: FC<professionalDetailsProps> = ({
  company,
  position,
  time,
  info,
  place,
  link = "",
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="flex items-start justify-between my-2 first:mt-0 last:mb-0 w-[60%] lg:w-[80%] mx-auto"
    >
      <LiIcon reference={ref} />
      <motion.div
        className="flex flex-col gap-1"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "sping" }}
      >
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="text-4xl font-bold lg:text-3xl sm:text-2xl"
          >
            {company}
          </Link>
        ) : (
          <div className="text-3xl font-semibold lg:text-2xl sm:text-xl">
            {company}
          </div>
        )}

        <Details details={{ position, time, info, place }} />
      </motion.div>
    </li>
  );
};

export default ProfessionalDetails;
