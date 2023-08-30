import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../types/screensPropsType";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import MenuHeader from "../MenuHeader";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import FindYourMeal from "./FindYourMeal";

const PortifolioScreen = ({ className }: TScreensPropsTypes) => {
  const { setPortifolioVisibilityState, isVisiblePortifolio } =
    UseIsVisibleContext();

  return (
    <article className={twMerge(" ", className)}>
      <MenuHeader
        titleHeader="PORTIFOLIO"
        onClick={() =>
          setPortifolioVisibilityState(handleVisibility(isVisiblePortifolio))
        }
      />
      <FooterBar className="mt-[-0.55rem]" />
      <section className="flex flex-col items-center  min-w-[21rem] max-w-[45rem] p-2">
        <h4 className="text-right font-poppins text-mediumGray mb-2">
          Find Your Meal
        </h4>
        <FindYourMeal />
      </section>
      <FooterBar />
      <p className="pDescription">
        Important: Exclusively this project, for desktops only!
      </p>
      <p className="pDescription">Project for NextJs13 certification</p>
      <FooterBar className="mb-[2rem]"/>
    </article>
  );
};

export default PortifolioScreen;
