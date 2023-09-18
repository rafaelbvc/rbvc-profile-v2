import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../context/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import FooterBar from "../FooterBar";
import { useForm } from "react-hook-form";

interface IProfileScreen {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  password?: string;
  className?: string;
  roles?: string;
}

const ProfileScreen = (props: IProfileScreen) => {
  const { firstName, lastName, phone, email, password, roles } = props;

  const { setGetProfileVisibilityState, isVisibleGetProfile } =
    UseIsVisibleContext();

  const { register } = useForm();

  return (
    <article className=" styleScreens">
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
              value={firstName ? firstName : " "}
              {...register("firstName", {
                required: true,
                pattern: {
                  value: /(^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']{3,14})$/,
                  message: "Must contain between 3 and 14 characters",
                },
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
              value={phone ? phone : " "}
              {...register("phone", {
                required: false,
                minLength: 7,
                maxLength: 14,
                pattern: {
                  value:
                    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/,
                  message: "Invalid format +55 55 55555-5555",
                },
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
            value={lastName ? lastName : " "}
            {...register("lastName", {
              required: false,
              pattern: {
                value: /(^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']{3,30})$/,
                message: "Must contain between 3 and 30 characters",
              },
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
            value={email ? email : " "}
            {...register("email", {
              required: false,
              minLength: 6,
              pattern: {
                value: /[a-z\d]+([._]?[a-z\d]+)+@[a-z\d]+(\.[a-z]+)+/,
                message: "Invalid email format!",
              },
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
              value={password ? password : " "}
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern: {
                  value: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                  message:
                    "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character",
                },
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
              value={roles ? roles : " "}
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
