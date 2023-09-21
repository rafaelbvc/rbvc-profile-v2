import { twMerge } from "tailwind-merge";

type TFooterBar = {
  className?: string;
};

const Divisor = ({ className }: TFooterBar) => {
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
