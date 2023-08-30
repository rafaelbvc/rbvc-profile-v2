import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../components/contexts/IsVisibleContext";
import AboutMeContainer from "../components/aboutMe/AboutMeContainer";

const Public = () => {
  const { isVisibleGetStarted, isVisibleProfile, isVisibleAboutMe } =
    UseIsVisibleContext();

  const handleTopMenuOpen = () => {
    if (isVisibleProfile === " ") {
      return " top-[7rem] sm:top-[4rem]";
    } else return " ";
  };

  return (
    <section>
      <menu className="flex bg-lightGray">
        <ProfileMenu
          className={twMerge(
            "fixed  left-2 md:hidden mx-auto max-w-[22rem]  py-1 menuOpenStyle",

            isVisibleProfile
          )}
        />

        <GetStartedMenu
          className={twMerge(handleTopMenuOpen(), isVisibleGetStarted)}
        />
      </menu>
      {/* TODO */}
      <section className="flex mx-auto mt-[3rem]">
        <AboutMeContainer className={twMerge("mx-auto", isVisibleAboutMe)} />
      </section>
    </section>
  );
};

export default Public;
