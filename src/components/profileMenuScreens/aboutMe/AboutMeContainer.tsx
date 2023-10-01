import { twMerge } from "tailwind-merge";
import AboutMePdf from "./pdf/AboutMePdf";
import AboutMeScreen from "./AboutMeScreen";
import { TScreensPropsTypes } from "../../../types/screensPropsType";


const AboutMeContainer = ({ className, animated }: TScreensPropsTypes) => {

  return (
    <section id="AboutMe" className={twMerge(" ", className)}>
      <AboutMePdf />
      <AboutMeScreen animated={animated } />
    </section>
  );
};

export default AboutMeContainer;
