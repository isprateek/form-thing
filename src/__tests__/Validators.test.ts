import Validators from "../components/Validators/Validators";

describe("Validators.compose", () => {
  test("returns the first validation error string", () => {
    const validator = Validators.compose([
      Validators.required(),
      Validators.minLength(3),
      Validators.email(),
    ]);
    expect(validator(""))
      .toBe("This field is required.");

    const validator2 = Validators.compose([
      Validators.minLength(3),
      Validators.email(),
    ]);
    expect(validator2("aa"))
      .toBe("Minimum length is 3 characters.");
  });

  test("returns true when all validators pass", () => {
    const validator = Validators.compose([
      Validators.required(),
      Validators.minLength(3),
    ]);
    expect(validator("abc")).toBe(true);
  });
});
