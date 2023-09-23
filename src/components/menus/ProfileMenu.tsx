import DefaultBtn from "../buttons/DefaultBtn";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../context/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import { TProfileMenu } from "../../types/profileMenu";

const ProfileMenu = (props: TProfileMenu) => {
  const { className, isVisibleHeader } = props;

  const {
    setProfileVisibilityState,
    isVisibleProfile,
  } = UseIsVisibleContext();

  return (
    <section className={className}>
      <header
        className={twMerge(
          "flex flex-row justify-between px-3 max-w-[22rem]",
          isVisibleHeader
        )}
      >
        <h3 className="self-end smallTitles">PROFILE</h3>
        <button
          onClick={() =>
            setProfileVisibilityState(handleVisibility(isVisibleProfile))
          }
          className="self-end smallTitles"
        >
          CLOSE
        </button>
      </header>

      <menu className="flex justify-between">
        <a href="#AboutMe">
          <DefaultBtn text="Home" />
        </a>
        <a href="#AboutMe">
          <DefaultBtn
            text="About Me"
          /></a>
        <a href="#PortifolioScreen">
          <DefaultBtn
            text="Portifolio"
          /></a>
        <a href="#ContactScreen">
          <DefaultBtn
            text="Contact"
          /></a>
        <a href="#HireScreen">
          <DefaultBtn
            text="Hire"
          /></a>
      </menu>
    </section>
  );
};

export default ProfileMenu;
