import { twMerge } from "tailwind-merge";
import AboutMePdf from "./pdf/AboutMePdf";
import AboutMeScreen from "./AboutMeScreen";

type TAboutMeContainer = {
  className?: string;
};

const AboutMeContainer = ({ className }: TAboutMeContainer) => {
  return (
    <section className={twMerge(" ", className)}>
      <AboutMePdf />
      <AboutMeScreen />
    </section>
  );
};

export default AboutMeContainer;
