import React, { ChangeEvent } from "react";
import { useFormContext } from "../context/useFormContext";
import { FormGroupState, InputProps } from "../types/types";

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
