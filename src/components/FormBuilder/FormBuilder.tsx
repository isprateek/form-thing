import { ValidatorFn, FormGroupState } from "../types/types";

const FormBuilder = {
  group: (config: {
    [key: string]: [string, { [key: string]: ValidatorFn }];
  }): FormGroupState => {
    const initialState: FormGroupState = {};
    Object.keys(config).forEach((key) => {
      const [value, validators] = config[key];
      initialState[key] = { value, validators, touched: false, dirty: false };
    });
    return initialState;
  },
};

export default FormBuilder;
