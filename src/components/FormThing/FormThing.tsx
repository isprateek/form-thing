import React, { useState } from "react";
import FormContext from "../context/FormContext";
import { FormThingProps, FormGroupState } from "../types/types";

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
