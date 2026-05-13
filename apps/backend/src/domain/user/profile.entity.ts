import { ValidationDomainException } from "../shared/domain.exception";
import { UserName, UniversityId, IconUrl, ProfileId } from "./user.types";

export class Profile {
  private static readonly MIN_NAME_LENGTH = 4;
  private static readonly MAX_NAME_LENGTH = 15;
  private static readonly NAME_PATTERN = /^[a-zA-Z0-9_]+$/;

  private constructor(
    private readonly _profileId: ProfileId,
    private readonly _userName: UserName,
    private readonly _universityId: UniversityId,
    private readonly _iconUrl?: IconUrl,
  ) {}

  /**
   * 新規作成
   */
  public static create(
    profileId: ProfileId,
    universityId: UniversityId,
    userName: string,
  ): Profile {
    this.validate(userName);
    return new Profile(
      profileId as ProfileId,
      userName as UserName,
      universityId,
    );
  }

  /**
   * 再構築用
   */
  public static fromPersistence(
    profileId: ProfileId,
    userName: UserName,
    universityId: UniversityId,
    iconUrl?: IconUrl,
  ): Profile {
    return new Profile(profileId, userName, universityId, iconUrl);
  }

  private static validate(userName: string): void {
    if (
      userName.length < this.MIN_NAME_LENGTH ||
      userName.length > this.MAX_NAME_LENGTH
    ) {
      throw new ValidationDomainException(
        `ユーザー名は${this.MIN_NAME_LENGTH}〜${this.MAX_NAME_LENGTH}文字以内で入力してください`,
      );
    }

    if (!this.NAME_PATTERN.test(userName)) {
      throw new ValidationDomainException(
        "ユーザー名は英数字とアンダースコア（_）のみ使用できます",
      );
    }
  }

  // Getters
  get profileId(): ProfileId {
    return this._profileId;
  }

  get userName(): UserName {
    return this._userName;
  }

  get iconUrl(): IconUrl | undefined {
    return this._iconUrl;
  }

  get universityId(): UniversityId {
    return this._universityId;
  }
}
