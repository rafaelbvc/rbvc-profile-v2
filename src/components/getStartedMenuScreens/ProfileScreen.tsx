import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../contexts/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import { useForm } from "react-hook-form";
import useUserQuery from "../../hooks/useUserQuery";

const ProfileScreen = ({ className }: TScreensPropsTypes) => {
  const { queryReturn } = useUserQuery();

  console.log(queryReturn);

  const { setGetProfileVisibilityState, isVisibleGetProfile } =
    UseIsVisibleContext();

  const { register } = useForm();

  return (
    <article className={twMerge(" styleScreens", className)}>
      <MenuHeader
        className=""
        titleHeader="PROFILE"
        onClick={() =>
          setGetProfileVisibilityState(handleVisibility(isVisibleGetProfile))
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
              value={""}
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
              value={""}
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
            value={""}
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
            value={""}
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
              value={""}
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
              value={""}
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

export default ProfileScreen;
