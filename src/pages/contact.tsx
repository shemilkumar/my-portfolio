/* eslint-disable @next/next/no-img-element */
import SEO from "@/components/SEO";
import { GithubIcon, LinkedInIcon } from "@/components/assests/Icons";
import Headline from "@/components/ui/Headline";
import { container, item } from "@/util/staggeredAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface contactProps {}

interface ContactListProps {
  href: string;
  text: string;
  icon?: ReactNode;
  iconSrc?: string;
}

const ContactList: FC<ContactListProps> = ({ href, icon, iconSrc, text }) => {
  return (
    <motion.li variants={item}>
      <Link href={href} className="flex items-center gap-2">
        {icon ? (
          <span className="p-0.5 w-7">{icon}</span>
        ) : (
          <img alt="contact" className="w-8 h-auto" src={iconSrc} />
        )}
        <span>{text}</span>
      </Link>
    </motion.li>
  );
};

const contact: FC<contactProps> = ({}) => {
  return (
    <>
      <SEO
        pageTitle="Contact | Shemil"
        pageDescription={
          "Contact Shemilkumar, a talented Fullstack developer with expertise in web development, JavaScript, React, Node.js, and MongoDB. Discover his impressive portfolio of projects and services, including e-commerce websites and custom web applications, and see how Shemil can help you build a dynamic and responsive online presence. Contact him today to take the first step toward driving business growth through technology."
        }
      />
      <main className="flex flex-col items-center justify-center w-full">
        <motion.div
          className="grid w-[85%] xl:w-full grid-cols-12 pt-56 gap-y-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="col-span-12 pb-4 border-b-2 border-dark dark:border-light"
            variants={item}
          >
            <Headline title="Contact" className="text-start" />
          </motion.div>

          <div className="col-span-6 lg:col-span-12">
            <motion.div
              className="flex gap-12 lg:flex-col lg:gap-4 lg:w-full"
              variants={item}
            >
              <h2 className="text-xl font-semibold uppercase">Mail</h2>
              <ul className="flex flex-col gap-2 text-base font-medium text-dark/75 dark:text-light/75">
                <ContactList
                  href="mailto:shemil0055@gmail.com"
                  iconSrc="https://img.icons8.com/fluency/48/null/mail.png"
                  text="shemil0055@gmail.com"
                />
              </ul>
            </motion.div>
          </div>
          <div className="col-span-6 lg:col-span-12">
            <motion.div
              className="flex gap-12 lg:flex-col lg:gap-4 lg:w-full"
              variants={container}
            >
              <h2 className="text-xl font-semibold uppercase ">
                Social medias
              </h2>
              <ul className="flex flex-col gap-2 text-base font-medium text-dark/75 dark:text-light/75">
                <ContactList
                  href="https://linkedin.com/in/shemilkumar"
                  icon={<LinkedInIcon />}
                  text="linkedin"
                />
                <ContactList
                  href="https://github.com/shemilkumar"
                  icon={<GithubIcon />}
                  text="github"
                />
                <ContactList
                  href="https://www.instagram.com/__.shemil._/"
                  iconSrc="https://img.icons8.com/fluency/48/null/instagram-new.png"
                  text="instagram"
                />
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default contact;
