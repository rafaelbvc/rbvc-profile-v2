export interface IInputsComponent {
  htmlFor?: string;
  label?: string;
  id?: string;
  type?: string;
  className?: string;
  classNameForm?: string;
  value?: string;
  isRequired?: boolean;
  pattern?: RegExp | undefined;
  min?: number;
  max?: number;
}
