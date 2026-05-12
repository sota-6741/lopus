import { ValidationDomainException } from "../../shared/domainException";

export class EmailAddress {
  private static readonly REGEX =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  private readonly _value: string;

  constructor(value: string) {
    if (!EmailAddress.REGEX.test(value)) {
      throw new ValidationDomainException("Invalid email format");
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  get domain(): string {
    return this._value.split("@")[1];
  }
}
