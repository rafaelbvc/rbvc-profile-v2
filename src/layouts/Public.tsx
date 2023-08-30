import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../components/contexts/IsVisibleContext";
import AboutMeContainer from "../components/aboutMe/AboutMeContainer";
import PortifolioScreen from "../components/portifolio/PortifolioScreen";
import ContactScreen from "../components/ContactScreen";
import HireScreen from "../components/HireScreen";

const Public = () => {
  const {
    isVisibleGetStarted,
    isVisibleProfile,
    isVisibleAboutMe,
    isVisiblePortifolio,
    isVisibleContact,
    isVisibleHireMe,
  } = UseIsVisibleContext();

  const handleTopMenuOpen = () => {
    if (isVisibleProfile === " ") {
      return " top-[7rem] sm:top-[4rem]";
    } else return " ";
  };

  return (
    <article>
      <menu className="flex bg-lightGray">
        <ProfileMenu
          className={twMerge(
            "fixed  left-2 md:hidden mx-auto max-w-[45rem]  py-1 menuOpenStyle z-10",

            isVisibleProfile
          )}
        />

        <GetStartedMenu
          className={twMerge(handleTopMenuOpen(), isVisibleGetStarted)}
        />
      </menu>
      <section className="flex flex-wrap mx-auto">
        <span className="h-[3.2rem] w-full" />
        <AboutMeContainer className={twMerge("mx-auto", isVisibleAboutMe)} />
        <PortifolioScreen
          className={twMerge("mx-auto mt-[0.67rem]", isVisiblePortifolio)}
        />
        <ContactScreen className={twMerge("mx-auto", isVisibleContact)} />
        <HireScreen className={twMerge("mx-auto", isVisibleHireMe)} />
      </section>
    </article>
  );
};

export default Public;
