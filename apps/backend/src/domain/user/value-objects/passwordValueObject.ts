import { ValidationDomainException } from "../../shared/domainException";

export class Password {
  private static readonly REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|(){}\[\]:;\"\'<>,.?/]).{8,64}$/;

  private readonly _value: string;

  constructor(value: string) {
    if (!Password.REGEX.test(value)) {
      throw new ValidationDomainException(
        "Password does not meet complexity requirements",
      );
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
