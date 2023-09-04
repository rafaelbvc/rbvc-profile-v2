import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import { useForm } from "react-hook-form";

const SignInScreen = ({ className }: TScreensPropsTypes) => {
  const { setSignInVisibilityState, isVisibleSignIn } = UseIsVisibleContext();

  const { watch, register } = useForm();

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
      <form className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              id="firstName"
              className="vInputs max-w-[11.5rem] sm:max-w-none"
              type="text"
              {...register("firstName", {
                required: true,
                minLength: 3,
                maxLength: 14,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              id="phone"
              className="vInputs max-w-[11.5rem] sm:max-w-none"
              type="text"
              {...register("phone", {
                required: false,
                minLength: 7,
                maxLength: 14,
              })}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="vLabels">
            Last Name
          </label>
          <input
            id="lastName"
            className="vInputs"
            type="text"
            {...register("lastName", {
              required: false,
              minLength: 3,
              maxLength: 30,
            })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="vLabels">
            E-Mail
          </label>
          <input
            id="email"
            className="vInputs"
            type="text"
            {...register("email", {
              required: false,
              minLength: 6,
              maxLength: 40,
            })}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="password" className="vLabels">
              Password
            </label>
            <input
              id="password"
              className="vInputs max-w-[11.5rem] sm:max-w-none"
              type="text"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roles" className="vLabels">
              Roles
            </label>
            <select
              className="vSelect min-h-[1.34rem]"
              id="roles"
              {...register("roles", { required: true })}
            >
              <option className="vSelect" value="Admin">
                Admin
              </option>
              <option className="vSelect" value="Visitor">
                Visitor
              </option>
              <option className="vSelect" value="Subscribed">
                Subscribed
              </option>
            </select>
          </div>
        </div>
      </form>
      <FooterBar className="my-[2rem]" />
    </article>
  );
};

export default SignInScreen;
