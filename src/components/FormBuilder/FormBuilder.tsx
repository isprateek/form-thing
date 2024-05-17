interface ValidatorFn {
  (value: string): boolean | string;
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
