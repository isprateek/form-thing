interface ValidatorFn {
  (value: string): boolean | string;
}

class Validators {
  static min(min: number) {
    return (value: string) =>
      parseFloat(value) >= min || `Minimum value is ${min}.`;
  }

  static max(max: number) {
    return (value: string) =>
      parseFloat(value) <= max || `Maximum value is ${max}.`;
  }

  static required() {
    return (value: string) =>
      value.trim().length > 0 || "This field is required.";
  }

  static requiredTrue() {
    return (value: string) => value === "true" || "This field must be true.";
  }

  static email() {
    return (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format.";
  }

  static minLength(minLength: number) {
    return (value: string) =>
      value.length >= minLength || `Minimum length is ${minLength} characters.`;
  }

  static maxLength(maxLength: number) {
    return (value: string) =>
      value.length <= maxLength || `Maximum length is ${maxLength} characters.`;
  }

  static pattern(pattern: string | RegExp) {
    return (value: string) =>
      new RegExp(pattern).test(value) || `Does not match the required pattern.`;
  }

  static nullValidator() {
    return () => true;
  }

  static compose(validators: ValidatorFn[]) {
    return (value: string) => {
      for (const validator of validators) {
        const result = validator(value);
        if (result !== true) return result;
      }
      return true;
    };
  }
}

export default Validators;
