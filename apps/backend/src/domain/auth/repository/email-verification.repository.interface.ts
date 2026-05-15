import { BaseRepository } from "../../shared/repository/_base.repository";

import { EmailVerificationToken } from "../entity/email-verification-token.entity";
import { VerificationToken } from "../auth.types";

export interface EmailVerificationRepository extends BaseRepository {
  /**
   * トークンを保存する
   */
  save(token: EmailVerificationToken): Promise<void>;

  /**
   * トークン文字列からトークンを取得する
   */
  findByToken(token: VerificationToken): Promise<EmailVerificationToken | null>;

  /**
   * 特定のユーザーに関連するトークンを削除する（再送時や有効化後用）
   */
  deleteByUserId(userId: string): Promise<void>;
}
