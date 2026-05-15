import { ValidationDomainException } from "../../shared/error/domain.exception";
import { HashedPassword } from "../user.types";

export class Password {
  private static readonly MIN_LENGTH = 8;
  private static readonly MAX_LENGTH = 64;
  private static readonly PATTERN_UPPERCASE = /[A-Z]/;
  private static readonly PATTERN_LOWERCASE = /[a-z]/;
  private static readonly PATTERN_NUMBER = /\d/;
  private static readonly PATTERN_SYMBOL =
    /[~!@#$%^&*_\-+=`|(){}\[\]:;\"\'<>,.?/]/;

  private readonly _value: string;
  private readonly _isHashed: boolean;

  private constructor(value: string, isHashed: boolean) {
    this._value = value;
    this._isHashed = isHashed;
  }

  /**
   * 新規登録用: 生パスワードから作成(バリデーションあり)
   */
  public static create(value: string): Password {
    this.validate(value);
    return new Password(value, false);
  }

  /**
   * DB再構築用: ハッシュ化済みの値から作成
   */
  public static createFromHash(hashedValue: HashedPassword): Password {
    return new Password(hashedValue, true);
  }

  private static validate(value: string): void {
    if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
      throw new ValidationDomainException(
        `パスワードは${this.MIN_LENGTH}文字以上${this.MAX_LENGTH}文字以内で入力してください`,
      );
    }
    if (!this.PATTERN_UPPERCASE.test(value)) {
      throw new ValidationDomainException(
        "パスワードには少なくとも1つの大文字を含めてください",
      );
    }
    if (!this.PATTERN_LOWERCASE.test(value)) {
      throw new ValidationDomainException(
        "パスワードには少なくとも1つの小文字を含めてください",
      );
    }
    if (!this.PATTERN_NUMBER.test(value)) {
      throw new ValidationDomainException(
        "パスワードには少なくとも1つの数字を含めてください",
      );
    }
    if (!this.PATTERN_SYMBOL.test(value)) {
      throw new ValidationDomainException(
        "パスワードには少なくとも1つの記号を含めてください",
      );
    }
  }

  public get value(): string {
    return this._value;
  }

  public get isHashed(): boolean {
    return this._isHashed;
  }
}
