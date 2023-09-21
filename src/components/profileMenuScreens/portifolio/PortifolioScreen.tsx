import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../../types/screensPropsType";
import { UseIsVisibleContext } from "../../context/IsVisibleContext";
import MenuHeader from "../../MenuHeader";
import { handleVisibility } from "../../../utils/handleVisible";
import FooterBar from "../../FooterBar";
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
        buttonText="TO TOP"
      />
      <section className="flex flex-col items-center  min-w-[21rem] max-w-[45rem] p-2">
        <h4 className="mb-2 text-right text-mediumGray">
          Find Your Meal
        </h4>
        <FindYourMeal />
      </section>
      <FooterBar />
      <p className="pDescription">
        Important: Exclusively this project, for desktops only!
      </p>
      <p className="pDescription">Project for NextJs13 certification</p>
      <FooterBar/>
      <p className="pDescription ">...more projects soon...</p>
      <FooterBar className="mb-[2rem]"/>
    </article>
  );
};

export default PortifolioScreen;
