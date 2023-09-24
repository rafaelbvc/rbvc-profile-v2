import { twMerge } from "tailwind-merge";
// import Divisor from "./Divisor";
import { IMenuHeader } from "../interfaces/menuHeader";
import ArrowUp from "./svg/ArrowUp";
import ArrowDown from "./svg/ArrowDown";

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, onClick, className, buttonText, hRef, hrefUp, hrefDown, classArrowUp, classArrowDown, classNameArrows } = props;

  return (
    <header>
      <section className={twMerge("flex justify-between  bg-lightGray shadow-sm h-[3rem] rounded z-30 px-4", className)}>
        <h3 className="self-center smallTitles">{titleHeader}</h3>
        <a href={hRef} className="self-center">
          <button className="self-center smallTitles" onClick={onClick}>
            {buttonText}
          </button>
        </a>
        <menu className={twMerge("flex items-center justify-between w-[4.6rem]  h-[3rem]", classNameArrows)}>
          <a href={hrefUp} className={classArrowUp}>
            <ArrowUp width="30" />
          </a>

          <a href={hrefDown} className={classArrowDown}>
            <ArrowDown width="30" />
          </a>
        </menu>
      </section>
      {/* <Divisor className="margins" /> */}
    </header>
  );
};

export default MenuHeader;
