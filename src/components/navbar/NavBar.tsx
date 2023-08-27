import GetStartedBtn from "../buttons/GetStartedBtn";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import ProfileMenu from "../menus/ProfileMenu";

const NavBar = () => {
  return (
    <nav className="fixed px-1 grid grid-cols-3 w-screen justify-between h-[4rem] z-10 ">
      <h2 className="hidden">NavBar</h2>
      <menu className="self-center">
        <RBVCLogoBtn />
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
        <GetStartedBtn />
      </menu>
    </nav>
  );
};

export default NavBar;
