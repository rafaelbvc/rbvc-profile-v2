import { handleVisibility } from "../../utils/handleVisible";
import GetStartedBtn from "../buttons/GetStartedBtn";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import ProfileMenu from "../menus/ProfileMenu";

const NavBar = () => {
  const {
    setGetStartedVisibilityState,
    isVisibleGetStarted,
    setProfileVisibilityState,
    isVisibleProfile,
  } = UseIsVisibleContext();

  return (
    <nav className="sticky top-0 px-1 shadow-md grid grid-cols-3 bg-lightGray justify-between h-[4rem] z-40 rounded-b-sm">
      <h2 className="hidden">NavBar</h2>
      <menu className="self-center">
        <RBVCLogoBtn
          onClick={() =>
            setProfileVisibilityState(handleVisibility(isVisibleProfile))
          }
        />
      </menu>

      <menu className="self-center">
        <div className="hidden md:flex  ">
          <ProfileMenu
            className="flex mx-auto"
            isVisibleHeader="hidden md:fixed"
          />
        </div>
      </menu>

      <menu className="flex p-1 pt-2 cursor-pointer justify-end">
        <GetStartedBtn
          onClick={() =>
            setGetStartedVisibilityState(handleVisibility(isVisibleGetStarted))
          }
        />
      </menu>
    </nav>
  );
};

export default NavBar;
