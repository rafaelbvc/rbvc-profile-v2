import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../components/contexts/IsVisibleContext";
import PortifolioScreen from "../components/profileMenuScreens/portifolio/PortifolioScreen";
import ContactScreen from "../components/profileMenuScreens/ContactScreen";
import HireScreen from "../components/profileMenuScreens/HireScreen";
import { MotionDesign } from "../components/animatedBG/MotionDesign";
import AboutMeContainer from "../components/profileMenuScreens/aboutMe/AboutMeContainer";
import SignInScreen from "../components/getStartedMenuScreens/SignInScreen";
import ProfileScreen from "../components/getStartedMenuScreens/ProfileScreen";

const Public = () => {
  const {
    isVisibleGetStarted,
    isVisibleProfile,
    isVisibleAboutMe,
    isVisiblePortifolio,
    isVisibleContact,
    isVisibleHireMe,
    isVisibleSignIn,
    isVisibleGetProfile,
  } = UseIsVisibleContext();


  const handleTopMenuOpen = () => {
    if (isVisibleProfile === " ") {
      return " top-[7rem] sm:top-[4rem]";
    } else return " ";
  };


  return (
    <article className="relative">
      <menu className="flex">
        <ProfileMenu
          className={twMerge(
            "fixed  left-2 md:hidden mx-auto max-w-[45rem]  py-1 menuOpenStyle z-20",

            isVisibleProfile
          )}
        />

        <GetStartedMenu
          className={twMerge(handleTopMenuOpen(), isVisibleGetStarted)}
        />
      </menu>
      <section className="flex flex-wrap mx-auto">
        <span className="h-[3.2rem] w-full" />
        <AboutMeContainer
          className={twMerge("mx-auto z-10", isVisibleAboutMe)}
        />
        <PortifolioScreen
          className={twMerge("styleScreens", isVisiblePortifolio)}
        />
        <ContactScreen className={twMerge("styleScreens", isVisibleContact)} />
        <HireScreen className={twMerge("styleScreens", isVisibleHireMe)} />
        <SignInScreen className={twMerge("stylescreens", isVisibleSignIn)} />
        <ProfileScreen
          className={twMerge("stylescreens", isVisibleGetProfile)}
        />
      </section>
      <div className="absolute w-full h-full min-h-screen top-0 left-0">
        <MotionDesign />
      </div>
    </article>
  );
};

export default Public;
