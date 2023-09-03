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
        <div className="flex">
          <InputComponent
            id="firstName"
            htmlFor="firstName"
            label="First Name"
            className="vInputs"
            classNameForm="flex flex-col"
            type="text"
          />
          <InputComponent
            id="phoneI"
            htmlFor="phoneI"
            label="Phone"
            className="vInputs"
            classNameForm="flex flex-col"
            type="text"
          />
        </div>
        <InputComponent
          id="lastName"
          htmlFor="lastName"
          label="Last Name"
          className="vInputs"
          classNameForm="flex flex-col"
          type="text"
        />
        <InputComponent
          id="emailI"
          htmlFor="emailI"
          label="E-Mail"
          className="vInputs"
          classNameForm="flex flex-col"
          type="text"
        />
                <div className="flex">
          <InputComponent
            id="passwordI"
            htmlFor="passwordI"
            label="PASSWORD"
            className="vInputs"
            classNameForm="flex flex-col"
            type="text"
          />
          <InputComponent
            id="creationDate"
            htmlFor="creationDate"
            label="Creation Date"
            className="vInputs"
            classNameForm="flex flex-col"
            type="text"
          />
        </div>
      </form>
      <FooterBar className="my-[2rem]" />
    </article>
  );
};

export default SignInScreen;
