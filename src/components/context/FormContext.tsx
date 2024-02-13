import { createContext } from "react";
import { FormContextType } from "../types/types";

const FormContext = createContext<FormContextType | undefined>(undefined);

export default FormContext;
