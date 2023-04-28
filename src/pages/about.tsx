import SEO from "@/components/SEO";
import coverPhoto from "../../public/coverPhoto-1.jpg";
import Image from "next/image";
import { FC } from "react";
import Headline from "@/components/ui/Headline";

interface aboutProps {}

const about: FC<aboutProps> = ({}) => {
  return (
    <>
      <SEO
        pageTitle="About | Shemil"
        pageDescription="About page of portfolio"
      />
      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        <Headline title="About ME" />

        <div className="grid grid-cols-12 p-32">
          <div className="flex flex-col justify-between col-span-6 pl-64">
            <h2 className="font-semibold text-dark/75">Biography</h2>
            <p className="font-medium">
              {`Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                client's visions to life`}
            </p>
            <p className="my-4 font-medium">
              {` I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.`}
            </p>
            <p className="my-4 font-medium">
              {` Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.`}
            </p>
          </div>

          <div className="flex items-center justify-center col-span-6">
            <Image
              src={coverPhoto}
              alt="coverPhoto"
              className="w-1/2 h-auto rounded-xl"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default about;
