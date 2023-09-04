import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { IInputsComponent } from "../../interfaces/inputComponent";

const InputComponent = (props: IInputsComponent) => {
  const {
    htmlFor = " ",
    label = " ",
    id = " ",
    type = " ",
    className = " ",
    classNameForm = " ",
    value,
    isRequired = false,
    pattern,
    min = 3,
    max = 3,
  } = props;

  const {
    // getValues,
    register,
    // handleSubmit,
    // watch,
    // formState: { erros },
  } = useForm();

  return (
    <form className={twMerge(" ", classNameForm)}>
      <label htmlFor={htmlFor} className="vLabels">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={twMerge("vInputs", className)}
        value={value}
        {...register(`${id}`, {
          required: isRequired,
          pattern: pattern,
          minLength: min,
          maxLength: max,
        })}
      />
    </form>
  );
};

export default InputComponent;
