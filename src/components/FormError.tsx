import React from "react";
import { useFormContext } from "./context/useFormContext";

interface FormErrorProps {
  formControlName: string;
  validatorKey: string;
}

const FormError: React.FC<FormErrorProps> = ({
  formControlName,
  validatorKey,
}) => {
  const { getFormControl } = useFormContext();
  const control = getFormControl(formControlName);
  const validatorResult = control.validators[validatorKey](control.value);
  const showError =
    typeof validatorResult === "string" && (control.dirty || control.touched);

  return showError ? (
    <div style={{ color: "red", marginTop: "5px" }}>{validatorResult}</div>
  ) : null;
};

export default FormError;
