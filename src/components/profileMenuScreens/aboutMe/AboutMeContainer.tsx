import { twMerge } from "tailwind-merge";
import AboutMePdf from "./pdf/AboutMePdf";
import AboutMeScreen from "./AboutMeScreen";
import { TScreensPropsTypes } from "../../../types/screensPropsType";


const AboutMeContainer = ({ className }: TScreensPropsTypes) => {
  return (
    <section id="AboutMe" className={twMerge(" ", className)}>
      <AboutMePdf />
      <AboutMeScreen />
    </section>
  );
};

export default AboutMeContainer;
