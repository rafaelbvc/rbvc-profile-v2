import { twMerge } from "tailwind-merge";
import MenuHeader from "../MenuHeader";
import UnderConstructionSVG from "../svg/UnderConstructionSVG";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const HireScreen = ({ className }: TScreensPropsTypes) => {

  return (
    <article id="HireScreen" className={twMerge("mt-[0.7rem] scroll-smooth ", className)}>
      <MenuHeader
        className=""
        titleHeader="HIRE ME"
        buttonText="TO TOP"
        hrefUp="#AboutMe"
        classArrowDown="hidden"
        classNameArrows="justify-end"
      />
      <section className="flex justify-center paddingYScreens ">
        <div className="flex flex-col p-2 sm:flex-row margins ">
          <span className="p-3">
            <p className="text-right text-mediumGray">
              Sorry, this area is under construction... <br /> Soon...
            </p>
          </span>
          <div className="p-3">
            <UnderConstructionSVG widthSVG="self-center" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default HireScreen;

