import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import InputComponent from "./InputComponent";
import { useForm } from "react-hook-form";

const SignInScreen = ({ className }: TScreensPropsTypes) => {
  const { setSignInVisibilityState, isVisibleSignIn } = UseIsVisibleContext();

  const { watch } = useForm();

  const formData = watch();
  console.log(formData);

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
            className="max-w-[11.5rem] sm:max-w-none"
            classNameForm="flex flex-col"
            type="text"
            isRequired={true}
            min={3}
            max={14}
          />
          <InputComponent
            id="phoneI"
            htmlFor="phoneI"
            label="Phone"
            className="max-w-[11.5rem] sm:max-w-none"
            classNameForm="flex flex-col"
            type="text"
            isRequired={false}
            min={7}
            max={14}
          />
        </div>
        <InputComponent
          id="lastName"
          htmlFor="lastName"
          label="Last Name"
          className=""
          classNameForm="flex flex-col"
          type="text"
          isRequired={true}
          min={3}
          max={30}
        />
        <InputComponent
          id="emailI"
          htmlFor="emailI"
          label="E-Mail"
          className=""
          classNameForm="flex flex-col"
          type="text"
          isRequired={true}
          min={6}
          max={40}
        />
        <div className="flex">
          <InputComponent
            id="passwordI"
            htmlFor="passwordI"
            label="Password"
            className="max-w-[11.5rem] sm:max-w-none"
            classNameForm="flex flex-col"
            type="text"
            isRequired={true}
            min={8}
            max={20}
          />
          <InputComponent
            id="rolesI"
            htmlFor="Roles"
            label="Roles"
            className="max-w-[11.5rem] sm:max-w-none"
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
