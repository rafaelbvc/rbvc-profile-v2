import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../types/screensPropsType";

const Divisor = ({ className }: TScreensPropsTypes) => {
  return (
    <footer
      className={twMerge(
        "bg-gradient-to-r from-black via-golden to-golden h-[1px]",
        className
      )}
    />
  );
};

export default Divisor;
