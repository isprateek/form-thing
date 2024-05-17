import { useContext } from "react";
import FormContext from "./FormContext";

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

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
