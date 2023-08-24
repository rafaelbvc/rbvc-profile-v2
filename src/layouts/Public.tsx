import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import { useState } from "react";

type TIsCollapse = {
  profile: boolean;
  getStarted: boolean;
};

const Public = () => {
  // const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isCollapse, setIsCollapse] = useState<TIsCollapse>({
    profile: false,
    getStarted: false,
  });

  const handleMenuOpen = () => {};

  return (
    <div className="bg-lightGray">
      <ProfileMenu
        className={`fixed  left-2 md:hidden mx-auto max-w-[22rem]  py-1 menuOpenStyle ${
          isCollapse ? " " : " hidden"
        }`}
      />
      <GetStartedMenu
        className={`fixed  menuOpenStyle right-2 ${
          isCollapse.profile ? " " : " top-12 sm:top-0"
        }`}
      />
    </div>
  );
};

export default Public;
