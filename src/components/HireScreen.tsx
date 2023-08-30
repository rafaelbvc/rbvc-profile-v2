import { twMerge } from "tailwind-merge";
import { handleVisibility } from "../utils/handleVisible";
import FooterBar from "./FooterBar";
import MenuHeader, { IMenuHeader } from "./MenuHeader";
import { UseIsVisibleContext } from "./contexts/IsVisibleContext";
import UnderConstructionSVG from "./svg/UnderConstructionSVG";

const HireScreen = ({ className }: IMenuHeader) => {
  const { setHireMeVisibilityState, isVisibleHireMe } = UseIsVisibleContext();

  return (
    <article
      className={twMerge(
        "mt-[0.7rem]",
        className
      )}
    >
      <MenuHeader
        className=""
        titleHeader="HIRE ME"
        onClick={() =>
          setHireMeVisibilityState(handleVisibility(isVisibleHireMe))
        }
      />
      <FooterBar className="mt-[-0.5rem]"/>
      <section className="flex flex-col mx-auto bg-lightGray rounded min-w-[21rem] max-w-[45rem] p-2">
        <p className="text-right font-poppins text-mediumGray">
          Sorry, this area is under construction... <br /> Soon...
        </p>
        <UnderConstructionSVG widthSVG="23.5rem"/>
      </section>
      <FooterBar className="mb-[1rem]"/>
    </article>
  );
};

export default HireScreen;
