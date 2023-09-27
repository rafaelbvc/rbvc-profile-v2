import { twMerge } from "tailwind-merge";
// import Divisor from "./Divisor";
import { IMenuHeader } from "../interfaces/menuHeader";
import ArrowUp from "./svg/ArrowUp";
import ArrowDown from "./svg/ArrowDown";

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, className, hrefUp, hrefDown, classArrowUp, classArrowDown, classNameArrows } = props;

  return (
    <header>
      <section className={twMerge("flex justify-between  bg-lightGray shadow-sm h-[3rem] rounded z-30 px-4", className)}>
        <h3 className="self-center smallTitles paddingLScreens">{titleHeader}</h3>
        <menu className={twMerge("flex items-center paddingRScreens justify-between w-[3.2rem]  h-[3rem]", classNameArrows)}>
          <a href={hrefUp} className={classArrowUp}>
            <ArrowUp width="20" />
          </a>

          <a href={hrefDown} className={classArrowDown}>
            <ArrowDown width="20" />
          </a>
        </menu>
      </section>
    </header>
  );
};

export default MenuHeader;
