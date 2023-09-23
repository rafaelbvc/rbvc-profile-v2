import { twMerge } from "tailwind-merge";
import DefaultBtn from "../buttons/DefaultBtn";
import { TBTNPropsType } from "../../types/btnPropsType";
import { UseIsVisibleContext } from "../context/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const GetStartedMenu = ({ className, ...props }: TBTNPropsType) => {

  const { signed } = useContext(AuthContext)

  const {
    setGetStartedVisibilityState,
    isVisibleGetStarted,
    setGetProfileVisibilityState,
    isVisibleGetProfile,
    setSignInVisibilityState,
    isVisibleSignIn,
    setSignUpVisibilityState,
    isVisibleSignUp
  } = UseIsVisibleContext();

  useEffect(() => { }, [signed])

  return (
    <section
      {...props}
      className={twMerge(
        "fixed right-2 max-w-[22rem] py-1 menuOpenStyle  z-10",
        className
      )}
    >
      <header className="flex flex-row justify-between px-3 ">
        <h3 className="self-end smallTitles">GET STARTED</h3>
        <button
          className="self-end smallTitles"
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
        <DefaultBtn text="Sign Up" onClick={() => setSignUpVisibilityState(handleVisibility(isVisibleSignUp))} />
        <DefaultBtn
          text="Profile"
          disabled={signed}
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
