import { EmailAddress } from "../../user/value-objects/email-address.value-object";

export interface IMailer {
  /**
   * 本人確認メールを送信する
   */
  sendVerificationMail(to: EmailAddress, verifyUrl: string): Promise<void>;

  /**
   * パスワードリセットメールを送信する
   */
  sendPasswordResetMail(to: EmailAddress, resetUrl: string): Promise<void>;
}
