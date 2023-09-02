import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import InputComponent from "./InputComponent";

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
      {/* <p>fdffdf</p> */}
      <form>
        <InputComponent
          id="firstName"
          htmlFor="firstName"
          label="First Name"
          className="vInputs"
          classNameForm=""
          type="text"
        />
      </form>
      <FooterBar className="mb-[2rem]" />
    </article>
  );
};

export default SignInScreen;
