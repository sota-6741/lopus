import { Password } from "../value-objects/password.value-object";
import { HashedPassword } from "../user.types";

export interface IPasswordHasher {
  /**
   * パスワードをハッシュ化する
   */
  hash(password: Password): Promise<HashedPassword>;

  /**
   * パスワードがハッシュと一致するか検証する
   */
  compare(password: Password, hashed: HashedPassword): Promise<boolean>;
}
