import { ValidationDomainException } from "../../domain/shared/error/domain.exception";

import { UserRepository } from "../../domain/user/repository/user.repository.interface";
import { UniversityRepository } from "../../domain/university/repository/university.repository.interface";
import { EmailVerificationRepository } from "../../domain/auth/repository/email-verification.repository.interface";
import { IPasswordHasher } from "../../domain/user/service/password-hasher.interface";
import { IMailer } from "../../domain/mailer/service/mailer.interface";
import { IIdGenerator } from "../../domain/shared/service/id-generator.interface";
import { ITokenGenerator } from "../../domain/auth/service/token-generator.interface";

import { UserId } from "../../domain/user/user.types";
import { ProfileId } from "../../domain/user/user.types";
import { HashedPassword, UserName } from "../../domain/user/user.types";

import { UnitOfWork } from "../../domain/shared/repository/_uow";
import { RepositoryPick } from "../../domain/shared/repository/_base.repository";

export interface UserRegisterInput {
  email: string;
  password: string;
  userName: string;
}

export interface UserRegisterOutput {
  userId: string;
  email: string;
}

export class UserRegisterUsecase {
  constructor(
    private readonly uow: UnitOfWork<{
      userRepository: RepositoryPick<UserRepository, "save" | "existsByEmail">;
      universityRepository: RepositoryPick<
        UniversityRepository,
        "existsByDomain"
      >;
      emailVerificationRepository: RepositoryPick<
        EmailVerificationRepository,
        "save"
      >;
    }>,
    private readonly passwordHasher: IPasswordHasher,
    private readonly mailer: IMailer,
    private readonly userIdGenerator: IIdGenerator<UserId>,
    private readonly profileIdGenerator: IIdGenerator<ProfileId>,
    private readonly tokenGenerator: ITokenGenerator,
    private readonly appUrl: string, // 認証URL組み立て用ベースURL
  ) {}

  /**
   * ユーザー登録フロー
   * 1) ValueObject生成
   * 2) パスワードハッシュ化
   * トランザクション開始
   * 3) 大学ドメインの存在確認
   * 4) メールアドレスの存在確認
   * 5) ID生成
   * 6) エンティティ生成
   * 7) 認証トークン生成
   * 8) エンティティ生成
   * 9) 永続化
   * トランザクション終了
   * 10) 本人確認メール送信
   */

  public async execute(input: UserRegisterInput): Promise<UserRegisterOutput> {
    // TODO: 実装
  }
}
