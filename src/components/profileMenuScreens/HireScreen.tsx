import { twMerge } from "tailwind-merge";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../context/IsVisibleContext";
import UnderConstructionSVG from "../svg/UnderConstructionSVG";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const HireScreen = ({ className }: TScreensPropsTypes) => {
  const { setHireMeVisibilityState, isVisibleHireMe } = UseIsVisibleContext();

  return (
    <article className={twMerge("mt-[0.7rem]", className)}>
      <MenuHeader
        className=""
        titleHeader="HIRE ME"
        onClick={() =>
          setHireMeVisibilityState(handleVisibility(isVisibleHireMe))
        }
        buttonText="TO TOP"
      />
      <section className="flex flex-col mx-auto rounded min-w-[21rem] max-w-[45rem] p-2">
        <p className="text-right text-mediumGray">
          Sorry, this area is under construction... <br /> Soon...
        </p>
        <UnderConstructionSVG widthSVG="23rem" />
      </section>
      <FooterBar className="mb-[2rem]" />
    </article>
  );
};

export default HireScreen;
