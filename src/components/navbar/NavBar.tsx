import GetStartedBtn from "../buttons/GetStartedBtn";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import ProfileMenu from "../menus/ProfileMenu";

const NavBar = () => {
  return (
    <nav className="fixed grid grid-flow-col w-screen justify-between h-[5rem] z-10 ">
      <RBVCLogoBtn onClick={() => null} />
      <menu className="hidden md:flex">
        <ProfileMenu />
      </menu>

      <div className="p-1 pt-2 cursor-pointer self-center">
        <GetStartedBtn onClick={() => null} />
      </div>
    </nav>
  );
};

export default NavBar;
