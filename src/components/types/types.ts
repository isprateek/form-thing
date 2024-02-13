import { CSSProperties } from "react";

export interface ValidatorFn {
  (value: string): boolean | string;
}

export interface FormContextType {
  formState: FormGroupState;
  setFormState: React.Dispatch<React.SetStateAction<FormGroupState>>;
  getFormControl: (name: string) => FormControlState;
}

export interface FormControlState {
  value: string;
  validators: { [key: string]: (value: string) => boolean | string };
  touched: boolean;
  dirty: boolean;
}

export interface FormGroupState {
  [key: string]: FormControlState;
}

export interface FormThingProps {
  children: React.ReactNode;
  formGroup: FormGroupState;
  style?: CSSProperties;
  className?: string;
  submit: (form: FormGroupState) => void;
}

export interface InputProps {
  formControlName: string;
  placeholder?: string;
  style?: CSSProperties;
  className?: string;
}
