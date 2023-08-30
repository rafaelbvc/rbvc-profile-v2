import { twMerge } from "tailwind-merge";

interface IDefaultBtn {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const DefaultBtn = (props: IDefaultBtn) => {
  const { text, onClick, className, type } = props;

  return (
    <button
      type={type}
      className={twMerge("px-3", className)}
      onClick={onClick}
    >
      <p className="vBtnStyle">{text}</p>
    </button>
  );
};

export default DefaultBtn;
