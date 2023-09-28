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
          <h4 className="mb-2 text-right text-bold bounceTitles">
            Find Your Meal
          </h4>
          <FindYourMeal className="mb-[2rem] lg:mb-0 animate-pingIMG" />
        </section>
        <section className="flex flex-col p-2 items-left margins animate-pingText">
          <p className="text-bold">
            Important: Exclusively this project, for desktops only!
          </p>
          <br /><br /><br />
          <p>Restaurant Reservation Application
            <br /><br />
            •	NextJs 13<br />
            •	TypeScript<br />
            •	Prisma (ORM)<br />
            •	Tailwindcss<br />
            •	PostgreSQL<br /> <br />
            •	Loading and Success States<br />
            •	Static and Dynamic Routes<br />
            •	Pages: Error, Not Found<br />
            •	Server and Client Components<br />
            •	Authentication<br />
            •	Middleware, Hashers and Json Web Tokens<br />
            •	Context API - isAuth<br />
            •	Availability and Scheduling System<br />
          </p>
        </section>
      </section>
    </article>
  );
};

export default PortifolioScreen;
