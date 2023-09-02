import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";

const SignInScreen = ({ className }: TScreensPropsTypes) => {
  const { setSignInVisibilityState, isVisibleSignIn } = UseIsVisibleContext();

  return (
    <article className={twMerge(" styleScreens", className)}>
      <MenuHeader
        className=""
        titleHeader="SIGN IN"
        onClick={() =>
          setSignInVisibilityState(handleVisibility(isVisibleSignIn))
        }
      />
      <p >fdffdf</p>
      <form>getStartedScreen</form>
      <FooterBar className="mb-[2rem]" />
    </article>
  );
};

export default SignInScreen;
