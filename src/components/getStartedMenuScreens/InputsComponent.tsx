import { twMerge } from "tailwind-merge";

interface IInputsComponent  {
  onSubmit: () => void;
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  className: string;
}

const InputsComponent = (props: IInputsComponent) => {
  const { onSubmit, htmlFor, label, id, type, className } = props;

  // const {
//     getValues,
//     register,
//     handleSubmit,
//     watch,
//     formState: { erros },
// } = useForm()

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={htmlFor} className="vLabels">
        {label}
      </label>
      <input id={id} type={type} className={twMerge("vInputs", className)} />
    </form>
  );
};

export default InputsComponent;

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
