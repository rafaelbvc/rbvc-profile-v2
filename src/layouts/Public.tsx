import { useState } from "react";
import ProfileMenu from "../components/menus/ProfileMenu";

const Public = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div className="flex flex-col h-full bg-lightGray">
      <menu className={`${""}`}>
        <ProfileMenu
          className={`mt-[4.2rem] mx-4 rounded-md shadow-sm ${
            isVisible ? " " : " hidden"
          }`}
        />
      </menu>
    </div>
  );
};

export default Public;
