import { VerificationToken } from "../auth.types";

export interface ITokenGenerator {
  /**
   * 安全なランダムトークンを生成する
   */
  generate(): VerificationToken;
}
