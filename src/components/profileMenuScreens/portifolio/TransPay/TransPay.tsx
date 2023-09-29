import { twMerge } from "tailwind-merge";
import transPay from "./TransPayIMG.jpg";
import { TScreensPropsTypes } from "../../../../types/screensPropsType";

const TransPay = ({ className }: TScreensPropsTypes) => {
  return (
    <a href="https://rbvctranspay.netlify.app/" target="_blank" className={twMerge(" ", className)}>
      <img src={transPay} alt="Trans Pay - Rafael Vendramini" />
    </a>
  );
};

export default TransPay;
