import { twMerge } from "tailwind-merge";
import { IDefaultBtn } from "../../interfaces/defaultBtn";


const DefaultBtn = (props: IDefaultBtn) => {
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
