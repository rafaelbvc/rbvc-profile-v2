import DefaultBtn from "../buttons/DefaultBtn";
import { twMerge } from "tailwind-merge";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";

type TProfileMenu = {
  className?: string;
  isVisibleHeader?: string;
};

const ProfileMenu = (props: TProfileMenu) => {
  const { className, isVisibleHeader } = props;

  const { setProfileVisibilityState, isVisibleProfile } = UseIsVisibleContext();

  return (
    <section className={className}>
      <header
        className={twMerge(
          "flex flex-row justify-between px-3",
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

      <menu className="flex justify-between">
        <DefaultBtn text="Home" />
        <DefaultBtn text="About" onClick={() => null} />
        <DefaultBtn text="Portifolio" onClick={() => null} />
        <DefaultBtn text="Contact" onClick={() => null} />
        <DefaultBtn text="Hire" onClick={() => null} />
      </menu>
    </section>
  );
};

export default ProfileMenu;
