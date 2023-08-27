import ProfileMenu from "../components/menus/ProfileMenu";
import GetStartedMenu from "../components/menus/GetStartedMenu";
import useIsVisible from "../components/hooks/useIsVisible";
import { twMerge } from "tailwind-merge";

const Public = () => {
  const { isVisibleProfile = " hidden" } = useIsVisible();

  return (
    <div className="bg-lightGray">
      <ProfileMenu
        className={twMerge("fixed  left-2 md:hidden mx-auto max-w-[22rem]  py-1 menuOpenStyle", isVisibleProfile)}
      />

      <GetStartedMenu />
    </div>
  );
};

export default Public;
