import MenuHeader from '../MenuHeader'
import { UseIsVisibleContext } from '../contexts/IsVisibleContext'
import { handleVisibility } from '../../utils/handleVisible'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TScreensPropsTypes } from '../../types/screensPropsType'
import { twMerge } from 'tailwind-merge'
import FooterBar from '../FooterBar'

const SignUpScreen = ({ className }: TScreensPropsTypes) => {

    const { setSignUpVisibilityState, isVisibleSignUp } = UseIsVisibleContext()

    const { register, formState: { errors } } = useForm();

    return (
        <article className={twMerge("styleScreens", className)}>
            <MenuHeader titleHeader="SIGN IN" onClick={() => setSignUpVisibilityState(handleVisibility(isVisibleSignUp))} />
            <form>

                <div className="flex flex-col">
                    <label htmlFor="email" className="vLabels">
                        E-Mail
                    </label>
                    <input
                        id="email"
                        className="vInputs"
                        type="text"
                        value=""
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
                <div className="flex flex-col">
                    <label htmlFor="password" className="vLabels">
                        Password
                    </label>
                    <input
                        id="password"
                        className="vInputs max-w-[11.5rem] sm:max-w-none"
                        type="text"
                        value=""
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
                <menu className="flex justify-between mx-3 mt-2"><button className="text-sms hover:text-golden text-mediumGray">CLEAR</button>
                    <button type="submit" className="text-sms hover:text-golden text-mediumGray">SIGN UP</button></menu>

                <section className="p-2">
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p className="vInputErrors">{message}</p>}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => <p className="vInputErrors ">{message}</p>}
                    />
                </section>
            </form>
            <FooterBar className="mb-[2rem]" />
        </article>
    )
}

export default SignUpScreen