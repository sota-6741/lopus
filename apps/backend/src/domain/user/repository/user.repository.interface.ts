import { BaseRepository } from "../../shared/repository/_base.repository";

import { User } from "../entity/user.entity";
import { UserId } from "../user.types";
import { EmailAddress } from "../value-objects/email-address.value-object";

export interface UserRepository extends BaseRepository {
  /**
   * ユーザー作成・更新
   */
  save(user: User): Promise<void>;

  /**
   * ID検索
   */
  findById(id: UserId): Promise<User | null>;

  /**
   * メールアドレス検索
   */
  findByEmail(email: EmailAddress): Promise<User | null>;

  /**
   * メールアドレス存在確認
   */
  existsByEmail(email: EmailAddress): Promise<boolean>;
}
