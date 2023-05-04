import { HeadlineAnimated } from "@/components/ui/Headline";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

import StayHubImage from "../../public/img/StayHub-min.png";
import ShopspotImage from "../../public/img/Shopspot-min.png";
import BlackJackImage from "../../public/img/BlackJack-min.png";
import NetflixImage from "../../public/img/Netflix-min.png";
import NatoursImage from "../../public/img/Natours-min.png";
import ForkifyImage from "../../public/img/Forkify-min.png";

const Projects = ({}) => {
  return (
    <>
      <SEO pageTitle="Projects | Shemil" pageDescription="" />
      <main className="w-full">
        <HeadlineAnimated
          title="My Projects"
          className="pt-36 lg:pt-20 md:pt-14"
        />
        <div className="grid w-full grid-cols-12 pb-20 mt-16 md:mt-10 gap-y-40 xl:gap-y-20 md:gap-y-6">
          <motion.div
            className="w-full col-span-12"
            initial={{ y: -400, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <FeaturedProject
              image={StayHubImage}
              type="Featured MERN Project"
              title="StayHub - Home Booking Application"
              summary={`A feature-rich online Home booking web applicationb built using MERN stack. The backend of this application was developed using Express in Node.js, with MongoDB for database management. The frontend, on the other hand, was developed using React.js, TailwindCSS, and Redux, providing a better user interface with reusable components. Both the frontend and backend were fully written in TypeScript, ensuring type safety and code clarity.`}
              github="https://github.com/shemilkumar/StayHub"
              link="https://stayhub.shemilkumar.com"
              technologies={[
                "Typescript",
                "Node.js",
                "React.js",
                "Redux",
                "Express",
                "MongoDB",
                "REST API",
                "JWT",
                "AWS",
              ]}
            />
          </motion.div>

          <div className="flex col-span-12 gap-20 xl:gap-12 lg:gap-6 md:flex-col">
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={NetflixImage}
                type="React Project"
                title="Netflix clone"
                github="https://github.com/shemilkumar/netflix-clone"
                link="http://netflix-clone-5d65d.web.app/"
                technologies={["React.js", "Firebase", "CSS", "Git", "API"]}
              />
            </motion.div>
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={BlackJackImage}
                type="Vanila Javascript Project"
                title="BlackJack - Online Web Game"
                github="https://github.com/shemilkumar/BlackJack-webgame"
                link="https://blackjack-webgame.netlify.app/"
                technologies={[
                  "Javascript",
                  "ES06",
                  "CSS & HTML",
                  "Git",
                  "Parcel",
                ]}
              />
            </motion.div>
          </div>

          <motion.div
            className="col-span-12"
            initial={{ y: 400, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <FeaturedProject
              image={ShopspotImage}
              type="Featured React Project"
              title="Shopspot - Ecommerce Website"
              summary={`A Stunning E-commerce Website built using ReactJS, Redux,React Router, TailwindCSS and Firebase. It offers advanced features such as product browsing, search, filtering and sorting, shopping cart, and user account creation. The project also boasts a responsive design, dark mode, and integration with the dummyjson API. It showcases my ability to deliver high-quality web applications that meet and exceed user expectations.`}
              github="https://github.com/shemilkumar/shopspot"
              link="https://shopspot-shemil.vercel.app/"
              technologies={[
                "React.js",
                "Redux",
                "TailwindCSS",
                "Firebase",
                "Javascript",
                "Git",
                "API",
              ]}
            />
          </motion.div>

          <div className="flex col-span-12 gap-20 xl:gap-12 lg:gap-6 md:flex-col">
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={ForkifyImage}
                type="Vanila Javascript Project"
                title="Forkify - Food Recipe Website"
                github="https://github.com/shemilkumar/forkify"
                link="https://forkify-shemil.netlify.app"
                technologies={[
                  "Vanila Javascript",
                  "CSS & HTML",
                  "MVC",
                  "Git",
                  "API",
                ]}
              />
            </motion.div>
            <motion.div
              className=""
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Project
                image={NatoursImage}
                type="Node.js Project"
                title="Natours - Tour Booking Website"
                github="https://github.com/shemilkumar/natours"
                link="http://natours-shemil.cyclic.app/"
                technologies={[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST API",
                  "PUG",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
