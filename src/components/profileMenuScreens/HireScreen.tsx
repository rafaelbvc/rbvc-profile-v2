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
      <section className="flex justify-center paddingYScreens">
        <div className="flex flex-col p-2 rounded sm:flex-row margins ">
          <span className="p-3">
            <p className="text-right text-mediumGray">
              Sorry, this area is under construction... <br /> Soon...
            </p>
          </span>
          <div className="p-3">
            <UnderConstructionSVG widthSVG="23rem self-center" />
          </div>
        </div>
      </section>
      <FooterBar className="mb-[3rem]" />
    </article>
  );
};

export default HireScreen;

