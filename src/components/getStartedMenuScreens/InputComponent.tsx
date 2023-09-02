import { twMerge } from "tailwind-merge";

interface IInputsComponent {
  // onSubmit: () => void;
  htmlFor?: string;
  label?: string;
  id?: string;
  type?: string;
  className?: string;
  classNameForm?: string;
  value?: string
}

const InputComponent = (props: IInputsComponent) => {
  const { htmlFor, label, id, type, className, classNameForm, value } = props;

  // const {
  //     getValues,
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { erros },
  // } = useForm()

  return (
    <form className={twMerge(" ", classNameForm)}>
      <label htmlFor={htmlFor} className="vLabels">
        {label}
      </label>
      <input id={id} type={type} className={twMerge("vInputs", className)}  value={value}/>
    </form>
  );
};

export default InputComponent;

// {...register(`${id}`,{
//     required:,
//     pattern:{
//         value: {regex},
//         message:{`${message}`}
//     },

// })}

// const {
//     getValues,
//     register,
//     handleSubmit,
//     watch,
//     formState: { erros },
// } = useForm()
