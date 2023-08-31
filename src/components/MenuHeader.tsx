import { twMerge } from "tailwind-merge";
import FooterBar from "./FooterBar";
import { IMenuHeader } from "../interfaces/menuHeader";

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, onClick, className } = props;

  return (
    <header>
      <section className={twMerge("flex justify-between px-2", className)}>
        <h3 className="smallTitles">{titleHeader}</h3>
        <button className="smallTitles" onClick={onClick}>
          CLOSE
        </button>
      </section>
      <FooterBar className="mt-[-0.25rem] mx-1" />
    </header>
  );
};

export default MenuHeader;
