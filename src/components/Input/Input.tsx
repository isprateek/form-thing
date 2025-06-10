import React, { CSSProperties, ChangeEvent } from "react";
import { useFormContext } from "../context/useFormContext";

interface FormGroupState {
  [key: string]: FormControlState;
}

interface FormControlState {
  value: string;
  validators: { [key: string]: (value: string) => boolean | string };
  touched: boolean;
  dirty: boolean;
}

interface InputProps {
  formControlName: string;
  placeholder?: string;
  style?: CSSProperties;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  formControlName,
  placeholder,
  style = {},
  className = "",
}) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormState((prevState: FormGroupState) => ({
      ...prevState,
      [formControlName]: { ...prevState[formControlName], value, dirty: true },
    }));
  };

  const handleBlur = () => {
    setFormState((prevState: FormGroupState) => ({
      ...prevState,
      [formControlName]: { ...prevState[formControlName], touched: true },
    }));
  };

  const control = formState[formControlName];
  if (!control) {
    throw new Error(`No form control found for name: ${formControlName}`);
  }

  return (
    <input
      value={control.value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      style={style}
      className={className}
    />
  );
};

export default Input;
