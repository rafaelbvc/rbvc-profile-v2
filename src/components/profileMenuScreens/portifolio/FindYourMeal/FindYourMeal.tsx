import { twMerge } from "tailwind-merge";
import findYourMeal from "./FindYourMeal.jpg";
import { TScreensPropsTypes } from "../../../../types/screensPropsType";

const FindYourMeal = ({ className }: TScreensPropsTypes) => {
  return (
    <a href="https://findyourmeal-rbvc.vercel.app/" target="_blank" className={twMerge(" ", className)}>
      <img src={findYourMeal} alt="Find Your Meal - Rafael Vendramini" />
    </a>
  );
};

export default FindYourMeal;
