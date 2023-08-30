import { twMerge } from "tailwind-merge";

export interface IMenuHeader {
  onClick?: () => void;
  titleHeader?: string;
  className?: string;
}

const MenuHeader = (props: IMenuHeader) => {
  const { titleHeader, onClick, className } = props;

  return (
    <header
      className={twMerge(
        "flex justify-between mt-[-0.9rem] mb-1 px-2",
        className
      )}
    >
      <h3 className="smallTitles">{titleHeader}</h3>
      <button className="smallTitles" onClick={onClick}>
        CLOSE
      </button>
    </header>
  );
};

export default MenuHeader;
