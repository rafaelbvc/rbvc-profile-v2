import PortifolioPhotoContainer from "../PortifolioPhotoContainer";
import findYourMeal from "./FindYourMeal.jpg";

const FindYourMealScreen = () => {


  return (
    <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
      <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
        <h4 className="mb-2 text-right text-bold bounceTitles">
          Find Your Meal
        </h4>
        <PortifolioPhotoContainer className="mb-[2rem] lg:mb-0 animate-pingIMG" alt="Find Your Meal - Rafael Vendramini" href="https://findyourmeal-rbvc.vercel.app/" src={findYourMeal} />
      </section>
      <section className="flex flex-col p-2 items-left margins animate-pingText">
        <p className="text-center whitespace-normal text-bold">
          Important: Exclusively this project, for desktops only or landscape orientation!
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
          •	Availability and Scheduling System<br /><br />
        </p>
      </section>
    </section>
  );
};

export default FindYourMealScreen;
