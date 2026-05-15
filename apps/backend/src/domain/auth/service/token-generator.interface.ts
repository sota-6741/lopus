export interface ITokenGenerator {
  /**
   * 安全なランダムトークンを生成する
   */
  generate(): string;
}
