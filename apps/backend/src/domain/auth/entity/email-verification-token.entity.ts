import { UserId } from "../../user/user.types";
import { VerificationToken, TokenExpiresAt } from "../auth.types";

export class EmailVerificationToken {
  private constructor(
    private readonly _token: VerificationToken,
    private readonly _userId: UserId,
    private readonly _expiresAt: TokenExpiresAt,
  ) {}

  /**
   * 新規トークン作成
   * デフォルトの有効期限は 30分
   */
  public static create(
    userId: UserId,
    token: string,
    expiresInMinutes = 30,
  ): EmailVerificationToken {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + expiresInMinutes);

    return new EmailVerificationToken(
      token as VerificationToken,
      userId,
      expiresAt as TokenExpiresAt,
    );
  }

  /**
   * DBからの再構築用
   */
  public static fromPersistence(
    token: VerificationToken,
    userId: UserId,
    expiresAt: TokenExpiresAt,
  ): EmailVerificationToken {
    return new EmailVerificationToken(token, userId, expiresAt);
  }

  public isExpired(): boolean {
    return new Date() > this._expiresAt;
  }

  // Getters
  get token(): VerificationToken {
    return this._token;
  }

  get userId(): UserId {
    return this._userId;
  }

  get expiresAt(): TokenExpiresAt {
    return this._expiresAt;
  }
}
