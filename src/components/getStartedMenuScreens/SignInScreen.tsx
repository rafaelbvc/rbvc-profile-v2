import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import MenuHeader from "../MenuHeader";
import { UseIsVisibleContext } from "../context/IsVisibleContext";
import { handleVisibility } from "../../utils/handleVisible";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserData } from "../../interfaces/userData";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { baseURL } from "../../api/baseURL";
import Divisor from "../Divisor";



const SignInScreen = ({ className }: TScreensPropsTypes) => {

  const { setSignInVisibilityState, isVisibleSignIn } = UseIsVisibleContext();
  const [responseStatus, setResponseStatus] = useState<AxiosResponse | null>(null)

  const { handleSubmit, register, formState: { errors }, reset
  } = useForm<IUserData>();
  const onSubmit: SubmitHandler<IUserData> = async (data) => {
    await axios
      .post(`${baseURL}/createuser`, data)
      .then((response: AxiosResponse) => {
        console.log(response.data)
        setResponseStatus(response.data)
      })
      .catch((error) => console.log(error)).finally(() => reset())
  };



  useEffect(() => { }, [responseStatus])

  return (
    <article className={twMerge(" styleScreens", className)}>
      <MenuHeader
        className=""
        titleHeader="SIGN IN"
        onClick={() =>
          setSignInVisibilityState(handleVisibility(isVisibleSignIn))
        }
        buttonText="CLOSE"
      />{!responseStatus ?

        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
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
                  pattern: {
                    value: /(^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{3,14})$/,
                    message: "First name must contain between 3 and 14 characters",
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
                {...register("phone", {
                  required: false,
                  minLength: 7,
                  maxLength: 14,
                  pattern: {
                    value:
                      /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/,
                    message: "Invalid Phone format +55 55 55555-5555",
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
              {...register("lastName", {
                required: false,
                pattern: {
                  value: /(^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{3,30})$/,
                  message: "Last name must contain between 3 and 30 characters",
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
          <div className="flex flex-row justify-between">
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
            <button type="submit" className="pt-[0.8rem] pr-3 text-sms hover:text-golden text-mediumGray">SUBMIT</button>
          </div>
          <section className="p-2">
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => <p className="vInputErrors">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={({ message }) => <p className="vInputErrors ">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => <p className="vInputErrors ">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p className="vInputErrors ">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p className="vInputErrors ">{message}</p>}
            />
          </section>
        </form> : <p className="ml-[2rem] mt-[2rem] h-[5rem] w-content text-green">{responseStatus?.data.message}</p>}

      <Divisor className="mb-[2rem]" />
    </article>
  );
};

export default SignInScreen;
