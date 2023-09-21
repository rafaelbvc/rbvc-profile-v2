import { twMerge } from "tailwind-merge";
import { MotionDesign } from "../components/animatedBG/MotionDesign";
import ProfileMenu from "../components/menus/ProfileMenu";
import ContactScreen from "../components/profileMenuScreens/ContactScreen";
import HireScreen from "../components/profileMenuScreens/HireScreen";
import AboutMeContainer from "../components/profileMenuScreens/aboutMe/AboutMeContainer";
import PortifolioScreen from "../components/profileMenuScreens/portifolio/PortifolioScreen";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { UseIsVisibleContext } from "../components/context/IsVisibleContext";



const Public = () => {

  const {
    isVisibleGetStarted,
    isVisibleProfile,
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
      <section className="flex flex-col mx-auto">
        <span className="flex h-[3.2rem] w-full" />
        <AboutMeContainer
          className="z-10"
        />
        <PortifolioScreen
          className="z-10"
        />
        <ContactScreen className="z-10"
        />
        <HireScreen className="z-10"
        />
        {/* <SignInScreen className="z-10"
        />
        <ShowProfileScreen
          className="z-10"
        />
        <SignUpScreen className="z-10"
        /> */}
      </section>
      <div className="absolute top-0 left-0 w-full h-full min-h-screen">
        <MotionDesign />
      </div>
    </article>
  );
};

export default Public;