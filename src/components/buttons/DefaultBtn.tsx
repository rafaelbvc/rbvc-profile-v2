import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IDefaultBtn {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode
}

const DefaultBtn = (props: IDefaultBtn, ) => {
  const { text, onClick, className, type, children } = props;

  return (
    <button
      type={type}
      className={twMerge("px-3", className)}
      onClick={onClick}
    >
      {children}
      <p className={twMerge("vBtnStyle")}>{text}</p>
    </button>
  );
};

export default DefaultBtn;
