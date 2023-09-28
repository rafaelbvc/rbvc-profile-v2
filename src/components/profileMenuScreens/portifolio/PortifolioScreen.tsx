import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../../types/screensPropsType";
import MenuHeader from "../../MenuHeader";
import FindYourMeal from "./FindYourMeal";

const PortifolioScreen = ({ className }: TScreensPropsTypes) => {


  return (
    <article id="PortifolioScreen" className={twMerge(" ", className)}>
      <MenuHeader
        titleHeader="PORTIFOLIO"
        buttonText="TO TOP"
        hrefUp="#AboutMe"
        hrefDown="#ContactScreen"
      />
      <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
        <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
          <h4 className="mb-2 text-right text-mediumGray bounceTitles">
            Find Your Meal
          </h4>
          <FindYourMeal className="mb-[2rem] lg:mb-0 animate-pingIMG"/>
        </section>
        <section className="flex flex-col items-center p-2 margins">
          <p className="pDescription">
            Important: Exclusively this project, for desktops only!
          </p>
          <br/>
          <p className="pDescription">Project for NextJs13 certification</p>
          <br/>
          <p className="pDescription ">...more projects soon...</p>
        </section>
      </section>
    </article>
  );
};

export default PortifolioScreen;
