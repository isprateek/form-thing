import { createContext } from "react";

interface FormContextType {
  formState: FormGroupState;
  setFormState: React.Dispatch<React.SetStateAction<FormGroupState>>;
  getFormControl: (name: string) => FormControlState;
}

interface FormGroupState {
  [key: string]: FormControlState;
}

interface FormControlState {
  value: string;
  validators: { [key: string]: (value: string) => boolean | string };
  touched: boolean;
  dirty: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export default FormContext;
