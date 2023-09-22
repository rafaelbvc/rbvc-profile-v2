import { twMerge } from "tailwind-merge";
import Divisor from "./Divisor";
import { IMenuHeader } from "../interfaces/menuHeader";

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, onClick, className, buttonText, hRef } = props;

  return (
    <header>
      <section className={twMerge("flex justify-between px-2 margins", className)}>
        <h3 className="smallTitles mb-[-0.05rem]">{titleHeader}</h3>
        <a href={`${hRef}`} className="mb-[-0.3rem]">
          <button className="smallTitles" onClick={onClick}>
            {buttonText}
          </button>
        </a>
      </section>
      <Divisor className="margins" />
    </header>
  );
};

export default MenuHeader;
