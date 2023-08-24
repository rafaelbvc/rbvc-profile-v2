// import { useState } from "react";
import GetStartedBtn from "../buttons/GetStartedBtn";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import ProfileMenu from "../menus/ProfileMenu";

const NavBar = () => {


  return (
    <nav className="fixed grid grid-flow-col w-screen justify-between h-[4rem] z-10 ">
      <h2 className="hidden">NavBar</h2>
      <menu className="self-center">
        <RBVCLogoBtn onClick={() => null} />
      </menu>

      <menu className="hidden md:flex">
        <ProfileMenu />
      </menu>

      <menu className="p-1 pt-2 cursor-pointer self-center">
        <GetStartedBtn onClick={() => null} />
      </menu>
    </nav>
  );
};

export default NavBar;
