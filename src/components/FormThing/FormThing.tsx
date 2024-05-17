import React, { CSSProperties, useState } from "react";
import FormContext from "../context/FormContext";

interface FormThingProps {
  children: React.ReactNode;
  formGroup: FormGroupState;
  style?: CSSProperties;
  className?: string;
  submit: (form: FormGroupState) => void;
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

const FormThing: React.FC<FormThingProps> = ({
  children,
  formGroup,
  submit,
  style = {},
  className = "",
}) => {
  const [formState, setFormState] = useState<FormGroupState>(formGroup);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formState);
  };

  const getFormControl = (name: string) => {
    return formState[name];
  };

  return (
    <FormContext.Provider value={{ formState, setFormState, getFormControl }}>
      <form
        onSubmit={handleSubmit}
        style={{
          ...style,
        }}
        className={className}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default FormThing;
