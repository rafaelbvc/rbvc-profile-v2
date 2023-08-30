import DefaultBtn from "../buttons/DefaultBtn";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import { TProfileMenu } from "../../types/profileMenu";

const ProfileMenu = (props: TProfileMenu) => {
  const { className, isVisibleHeader } = props;

  const {
    setProfileVisibilityState,
    isVisibleProfile,
    setAboutMeVisibilityState,
    isVisibleAboutMe,
    setPortifolioVisibilityState,
    isVisiblePortifolio,
    setContactVisibilityState,
    isVisibleContact,
    setHireMeVisibilityState,
    isVisibleHireMe,
  } = UseIsVisibleContext();

  return (
    <section className={className}>
      <header
        className={twMerge(
          "flex flex-row justify-between px-3 max-w-[22rem] bg-lightGray",
          isVisibleHeader
        )}
      >
        <h3 className="smallTitles">PROFILE</h3>
        <button
          onClick={() =>
            setProfileVisibilityState(handleVisibility(isVisibleProfile))
          }
          className="smallTitles"
        >
          CLOSE
        </button>
      </header>

      <menu className="flex justify-between bg-lightGray">
        <DefaultBtn text="Home" />
        <DefaultBtn
          text="About Me"
          onClick={() =>
            setAboutMeVisibilityState(handleVisibility(isVisibleAboutMe))
          }
        />
        <DefaultBtn
          text="Portifolio"
          onClick={() =>
            setPortifolioVisibilityState(handleVisibility(isVisiblePortifolio))
          }
        />
        <DefaultBtn
          text="Contact"
          onClick={() =>
            setContactVisibilityState(handleVisibility(isVisibleContact))
          }
        />
        <DefaultBtn
          text="Hire"
          onClick={() =>
            setHireMeVisibilityState(handleVisibility(isVisibleHireMe))
          }
        />
      </menu>
    </section>
  );
};

export default ProfileMenu;
