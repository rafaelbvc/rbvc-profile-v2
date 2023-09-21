import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IDefaultBtn {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
  children?: ReactNode
}

const DefaultBtn = (props: IDefaultBtn,) => {
  const { text, onClick, className, type, children, disabled } = props;

  return (
    <button
      type={type}
      className={twMerge("px-3", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <p className={twMerge("vBtnStyle")}>{text}</p>
    </button>
  );
};

export default DefaultBtn;
