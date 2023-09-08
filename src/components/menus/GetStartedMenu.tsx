import { twMerge } from "tailwind-merge";
import DefaultBtn from "../buttons/DefaultBtn";
import { TBTNPropsType } from "../../types/btnPropsType";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";

const GetStartedMenu = ({ className, ...props }: TBTNPropsType) => {
  const {
    setGetStartedVisibilityState,
    isVisibleGetStarted,
    setSignInVisibilityState,
    isVisibleSignIn,
    setGetProfileVisibilityState,
    isVisibleGetProfile,
  } = UseIsVisibleContext();

  return (
    <section
      {...props}
      className={twMerge(
        "fixed right-2 max-w-[22rem] py-1 menuOpenStyle  z-10",
        className
      )}
    >
      <header className="flex flex-row justify-between px-3 ">
        <h3 className="smallTitles">GET STARTED</h3>
        <button
          className="smallTitles"
          onClick={() =>
            setGetStartedVisibilityState(handleVisibility(isVisibleGetStarted))
          }
        >
          CLOSE
        </button>
      </header>
      <menu className="flex justify-between">
        <DefaultBtn
          text="Sign In"
          onClick={() =>
            setSignInVisibilityState(handleVisibility(isVisibleSignIn))
          }
        />
        <DefaultBtn text="Sign Up" onClick={() => null} />
        <DefaultBtn
          text="Profile"
          onClick={() =>
            setGetProfileVisibilityState(handleVisibility(isVisibleGetProfile))
          }
        />
        <DefaultBtn text="Post" onClick={() => null} />
      </menu>
    </section>
  );
};

export default GetStartedMenu;
