import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import PhotoMyProfileA from "./PhotoMyProfileA.jpg";
import JavaScriptLogo from "../../svg/JavaScriptLogo";
import MongoDBLogo from "../../svg/MongoDBLogo";
import NodeLogo from "../../svg/NodeLogo";
import PrismaLogo from "../../svg/PrismaLogo";
import NextLogo from "../../svg/NextLogo";
import ReactLogo from "../../svg/ReactLogo";
import TailwindCSSLogo from "../../svg/TailwindCSSLogo";
import TypeScriptLogo from "../../svg/TypeScriptLogo";
import Divisor from "../../Divisor";

const AboutMeScreen: ForwardRefRenderFunction<HTMLDivElement> = (
  props,
  ref
) => {
  const [bigIMG, setBigIMG] = useState<boolean>(false);

  const handleBigImg = (v: boolean) => {
    if (v) {
      setBigIMG(false);
    } else {
      return setBigIMG(true);
    }
  };

  return (
    <article ref={ref}>
      <section className="flex justify-center mx-auto paddingYScreens max-w-[60rem] flex-wrap md:flex-nowrap">
        <section className="flex flex-col p-1 mb-1 margins">
          <section className="flex flex-col items-center sm:flex-row">
            <section>
              <img
                src={PhotoMyProfileA}
                width={200}
                alt="MyProfileA"
                className={`${bigIMG
                  ? "absolute border-[1px] border-golden w-[18rem] "
                  : "rounded-full border-[1px] border-golden my-2 mx-auto min-w-[16rem]"
                  }`}
                onClick={() => handleBigImg(bigIMG)}
              />
              <title className="flex justify-center mb-1 mr-0">
                <p className="my-5 font-bold bounceTitles">Skills &</p>
                <p className="my-5 font-bold text-golden bounceTitlesDelay">&nbsp; Tools</p>
              </title>
              <div className="flex flex-row flex-wrap justify-center gap-4">
                <JavaScriptLogo width={"5rem"} />
                <MongoDBLogo width={"5rem"} />
                <NextLogo width={"5rem"} />
                <NodeLogo width={"5rem"} />
                <PrismaLogo width={"5rem"} />
                <ReactLogo width={"5rem"} />
                <TailwindCSSLogo width={"5rem"} />
                <TypeScriptLogo width={"5rem"} />
              </div>
            </section>
            <section className="flex flex-col p-1 whitespace-normal ">
              <title className="flex justify-end mb-1 mr-0">
                <p className="font-bold bounceTitles">Full Stack </p>
                <p className="font-bold text-golden bounceTitlesDelay">&nbsp; Developer</p>
              </title>
              <section className="">
                <p className="px-1 mt-2 overflow-hidden text-justify">
                  As a ReactJS, NodeJS and Next, Full-stack developer, I have a
                  strong background in building full-fledged web applications.
                  With advanced knowledge in React, I can create interactive and
                  responsive user interfaces while integrating with backend APIs
                  and services. Leveraging NextJS, I optimize performance and
                  rendering, ensuring a high-quality user experience. I have
                  experience working in agile teams, collaborating effectively to
                  deliver projects on time and within requirements. I tackle
                  complex technical challenges and find innovative solutions for
                  specific problems. Furthermore, I stay up-to-date with the
                  latest development practices, actively participating in
                  communities and constantly seeking to expand my technical
                  expertise. I am passionate about learning and applying new
                  technologies, ensuring that my work aligns with the latest
                  industry trends. I am available for challenging opportunities as
                  a React, NodeJS and NextJS, Full-stack developer, and I am
                  excited to contribute to project success with my experience and
                  skills.
                </p>
              </section>
              <title className="flex justify-end mb-1 mr-0">
                <p className="font-bold bounceTitles">Work </p>
                <p className="font-bold text-golden bounceTitlesDelay">&nbsp; Experience</p>
              </title>
              <section>
                <p className="justify-end px-1 mt-2 text-justify">
                  RBVC Soluções Tecnológicas Freelance Web Developer | May 2023 -
                  Present (present)
                  <br /> • Web development using agile methodology
                  <br /> • Proficient in ReactJS, React Native, NextJS, NodeJS,
                  and FullStack <br />• Knowledge of SQL and NoSQL databases
                  <br />• Experience with Git and DevOps
                </p>
              </section>
              <Divisor className="mt-4" />
            </section>
          </section>
          <section>
            <p className="justify-end px-1 mt-2 text-justify whitespace-normal">
              MeuCompromisso Fullstack & Mobile Developer | May 2022 - May 2023 (1
              year 1 month)
              <br />• Front-end development using ReactJS and React Native
              <br />• Skills in Components, Containers, Redux, Context API,
              Lifecycle, Jest, Mocha, Styled Components, Forms, Clean Code, Pair
              Programming, CI/CD, BitBucket, GitHub, API Integration and
              Consumption
              <br />• Experience in development and production environments
              <br />• Publishing on-demand in Production, Play Store, and App
              Store
            </p>
          </section>
          <Divisor />
          <section>
            <p className="justify-end px-1 mt-2 text-justify whitespace-normal">
              Cadmus Soluções em TI Software Developer | November 2021 - April
              2022 (6 months)
              <br />• Java development using SpringBoot
              <br />• Utilization of ArchUnit for architecture testing
              <br />• JUnit for functional testing
              <br />• Deployment and migration
            </p>
          </section>
          <Divisor />
          <section>
            <p className="justify-end px-1 mt-2 text-justify whitespace-normal">
              Autonomous February 2015 - April 2018 (3 years 3 months)
              <br />• Banner design
              <br />• Creation of starter sites and digital banners
              <br />• Flash Action Script (older version)
            </p>
          </section>
        </section>
      </section>
    </article>
  );
};


export default forwardRef(AboutMeScreen);


