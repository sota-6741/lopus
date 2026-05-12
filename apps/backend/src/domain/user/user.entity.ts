import { EmailAddress } from "./value-objects/email-address.value-object";
import { Password } from "./value-objects/password.value-object";
import { Profile } from "./profile.entity";
import { UserId, UserRole, UniversityId } from "./user.types";

export class User {
  private constructor(
    private readonly _id: UserId,
    private readonly _email: EmailAddress,
    private readonly _password: Password,
    private readonly _role: UserRole,
    private readonly _profile: Profile,
    private readonly _emailVerified: boolean,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
    private readonly _lastLoginAt?: Date,
  ) {}

  /**
   * 新規ユーザー作成
   */
  public static create(
    id: UserId,
    email: EmailAddress,
    password: Password,
    universityId: UniversityId,
    userName: string,
  ): User {
    const now = new Date();
    return new User(
      id,
      email,
      password,
      "general",
      Profile.create(universityId, userName),
      false,
      now,
      now,
    );
  }

  /**
   * DBからの再構築用
   */
  public static fromPersistence(
    id: UserId,
    email: EmailAddress,
    password: Password,
    role: UserRole,
    profile: Profile,
    emailVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    lastLoginAt?: Date,
  ): User {
    return new User(
      id,
      email,
      password,
      role,
      profile,
      emailVerified,
      createdAt,
      updatedAt,
      lastLoginAt,
    );
  }

  // Getters
  get id(): UserId {
    return this._id;
  }

  get email(): EmailAddress {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }

  get role(): UserRole {
    return this._role;
  }

  get profile(): Profile {
    return this._profile;
  }

  get emailVerified(): boolean {
    return this._emailVerified;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get lastLoginAt(): Date | undefined {
    return this._lastLoginAt;
  }
}
