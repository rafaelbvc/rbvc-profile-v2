import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import JavaScriptLogo from "../svg/JavaScriptLogo";
import MongoDBLogo from "../svg/MongoDBLogo";
import NextLogo from "../svg/NextLogo";
import NodeLogo from "../svg/NodeLogo";
import ReactLogo from "../svg/ReactLogo";
import TailwindCSSLogo from "../svg/TailwindCSSLogo";
import TypeScriptLogo from "../svg/TypeScriptLogo";
import PrismaLogo from "../svg/PrismaLogo";
import FooterBar from "../FooterBar";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import PhotoMyProfileA from "./PhotoMyProfileA.jpg";

const AboutMeScreen: ForwardRefRenderFunction<HTMLDivElement> = (
  props,
  ref
) => {
  const { setAboutMeVisibilityState, isVisibleAboutMe } = UseIsVisibleContext();

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
      <section className="flex rounded flex-col min-w-[21rem] max-w-[45rem] mb-1  p-1 bg-lightGray">
        <MenuHeader
          titleHeader="ABOUT ME"
          onClick={() =>
            setAboutMeVisibilityState(handleVisibility(isVisibleAboutMe))
          }
        />
        <FooterBar className="mt-[-0.5rem]" />
        <section className="flex flex-col items-center  sm:flex-row">
          <div className={`${bigIMG ? "max-w-[21rem]" : "w-[12.5rem]"}`}>
            <img
              src={PhotoMyProfileA}
              width={200}
              alt="MyProfileA"
              className={`${
                bigIMG
                  ? "absolute border-[1px] border-golden min-w-[12.4rem]"
                  : "rounded-full border-[1px] border-golden m-2 min-w-[12.6rem]"
              }`}
              onClick={() => handleBigImg(bigIMG)}
            />

            <title className="mr-0 flex mb-1 justify-center">
              <p className="  font-bold my-5">Skills &</p>
              <p className="  text-golden font-bold my-5">&nbsp; Tools</p>
            </title>
            <div className="flex justify-center  flex-row flex-wrap gap-4">
              <JavaScriptLogo width={"5rem"} />
              <MongoDBLogo width={"5rem"} />
              <NextLogo width={"5rem"} />
              <NodeLogo width={"5rem"} />
              <PrismaLogo width={"5rem"} />
              <ReactLogo width={"5rem"} />
              <TailwindCSSLogo width={"5rem"} />
              <TypeScriptLogo width={"5rem"} />
            </div>
          </div>
          <section className="p-1 whitespace-normal">
            <title className="mr-0 flex mb-1 justify-end">
              <p className="  font-bold">Full Stack </p>
              <p className="  text-golden font-bold">&nbsp; Developer</p>
            </title>
            <section>
              <p className="text-justify  mt-2 px-1 ">
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
            <title className="mr-0 flex mb-1 justify-end">
              <p className="  font-bold">Work </p>
              <p className="  text-golden font-bold">&nbsp; Experience</p>
            </title>
            <section>
              <p className="text-justify justify-end mt-2 px-1">
                RBVC Soluções Tecnológicas Freelance Web Developer | May 2023 -
                Present (present)
                <br /> • Web development using agile methodology
                <br /> • Proficient in ReactJS, React Native, NextJS, NodeJS,
                and FullStack <br />• Knowledge of SQL and NoSQL databases
                <br />• Experience with Git and DevOps
              </p>
            </section>
            <FooterBar />
          </section>
        </section>
        <section>
          <p className="text-justify justify-end mt-2 px-1 whitespace-normal">
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
        <FooterBar />
        <section>
          <p className="text-justify justify-end mt-2 px-1 whitespace-normal">
            Cadmus Soluções em TI Software Developer | November 2021 - April
            2022 (6 months)
            <br />• Java development using SpringBoot
            <br />• Utilization of ArchUnit for architecture testing
            <br />• JUnit for functional testing
            <br />• Deployment and migration
          </p>
        </section>
        <FooterBar />
        <section>
          <p className="text-justify justify-end mt-2 px-1 whitespace-normal">
            Autonomous February 2015 - April 2018 (3 years 3 months)
            <br />• Banner design
            <br />• Creation of starter sites and digital banners
            <br />• Flash Action Script (older version)
          </p>
        </section>
        <FooterBar className="mb-2" />
      </section>
    </article>
  );
};

export default forwardRef(AboutMeScreen);
