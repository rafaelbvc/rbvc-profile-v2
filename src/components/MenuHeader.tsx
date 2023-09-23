import { twMerge } from "tailwind-merge";
// import Divisor from "./Divisor";
import { IMenuHeader } from "../interfaces/menuHeader";

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, onClick, className, buttonText, hRef } = props;

  return (
    <header>
      <section className={twMerge("flex justify-between  bg-lightGray shadow-sm h-[3rem] rounded z-30 px-4", className)}>
        <h3 className="self-center smallTitles">{titleHeader}</h3>
        <a href={hRef} className="self-center">
          <button className="self-center smallTitles" onClick={onClick}>
            {buttonText}
          </button>
        </a>
      </section>
      {/* <Divisor className="margins" /> */}
    </header>
  );
};

export default MenuHeader;
