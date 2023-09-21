import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../../types/screensPropsType";
import MenuHeader from "../../MenuHeader";
import FooterBar from "../../FooterBar";
import FindYourMeal from "./FindYourMeal";

const PortifolioScreen = ({ className }: TScreensPropsTypes) => {


  return (
    <article id="PortifolioScreen" className={twMerge(" ", className)}>
      <MenuHeader
        titleHeader="PORTIFOLIO"
        buttonText="TO TOP"
        hRef="#AboutMe"
      />
      <section className="flex flex-col items-center p-2 margins">
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
      <FooterBar className="mb-[3rem]"/>
    </article>
  );
};

export default PortifolioScreen;
