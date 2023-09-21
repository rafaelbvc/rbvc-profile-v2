import { twMerge } from "tailwind-merge";
import FooterBar from "../FooterBar";
import MenuHeader from "../MenuHeader";
import UnderConstructionSVG from "../svg/UnderConstructionSVG";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const HireScreen = ({ className }: TScreensPropsTypes) => {

  return (
    <article id="HireScreen" className={twMerge("mt-[0.7rem] scroll-smooth", className)}>
      <MenuHeader
        className=""
        titleHeader="HIRE ME"
        buttonText="TO TOP"
        hRef="#AboutMe"
      />
      <section className="flex flex-col p-2 rounded margins ">
        <p className="text-right text-mediumGray">
          Sorry, this area is under construction... <br /> Soon...
        </p>
        <UnderConstructionSVG widthSVG="23rem self-center" />
      </section>
      <FooterBar className="mb-[3rem]"/>
    </article>
  );
};

export default HireScreen;
