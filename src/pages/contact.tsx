/* eslint-disable @next/next/no-img-element */
import SEO from "@/components/SEO";
import { GithubIcon, LinkedInIcon } from "@/components/assests/Icons";
import Headline from "@/components/ui/Headline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface contactProps {}

const contact: FC<contactProps> = ({}) => {
  return (
    <>
      <SEO pageTitle="Contact | Shemil" pageDescription="" />
      <main className="flex flex-col items-center justify-center w-full">
        <div className="grid w-[85%] grid-cols-12 pt-56 gap-y-5">
          <div className="col-span-12 pb-4 border-b-2 border-dark">
            <Headline title="Contact" />
          </div>

          <div className="col-span-6">
            <div className="flex items-center gap-12">
              <h2 className="text-xl font-semibold uppercase">Mail</h2>
              <ul className="flex flex-col gap-2 text-base font-medium text-dark/75">
                <Link
                  href="mailto:shemil0055@gmail.com"
                  className="flex items-center gap-2 "
                >
                  <img
                    alt="mail"
                    className="w-8 h-auto"
                    src={`https://img.icons8.com/fluency/48/null/mail.png`}
                  />
                  <span>shemil0055@gmail.com</span>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="flex gap-12">
              <h2 className="text-xl font-semibold uppercase">Social medias</h2>
              <ul className="flex flex-col gap-2 text-base font-medium text-dark/75">
                <Link
                  href="https://linkedin.com/in/shemilkumar"
                  target="_blank"
                  className="flex items-center gap-2 "
                >
                  <span className="p-0.5 w-7">
                    <LinkedInIcon />
                  </span>
                  <span>linkedin</span>
                </Link>
                <Link
                  href="https://github.com/shemilkumar"
                  target="_blank"
                  className="flex items-center gap-2 "
                >
                  <span className="w-7">
                    <GithubIcon />
                  </span>
                  <span>github</span>
                </Link>
                <Link
                  href="https://www.instagram.com/__.shemil._/"
                  target="_blank"
                  className="flex items-center gap-2 "
                >
                  <span className="w-7">
                    <img
                      alt="mail"
                      className="w-full h-auto"
                      src={`https://img.icons8.com/fluency/48/null/instagram-new.png`}
                    />
                  </span>

                  <span>instagram</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
