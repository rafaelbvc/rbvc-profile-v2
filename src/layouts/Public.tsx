import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../components/contexts/IsVisibleContext";

const Public = () => {
  const { isVisibleGetStarted, isVisibleProfile } = UseIsVisibleContext();

  const handleTopMenuOpen = () => {
    if (isVisibleProfile === " ") {
      return " top-[7rem] sm:top-[4rem]";
    } else return " ";
  };

  return (
    <div className="bg-lightGray">
      <ProfileMenu
        className={twMerge(
          "fixed  left-2 md:hidden mx-auto max-w-[22rem]  py-1 menuOpenStyle",

          isVisibleProfile
        )}
      />

      <GetStartedMenu
        className={twMerge(handleTopMenuOpen(), isVisibleGetStarted)}
      />
    </div>
  );
};

export default Public;
