import { v4 as uuidv4, v7 as uuidv7 } from "uuid";
import { IIdGenerator } from "../../domain/shared/service/id-generator.interface";
import { IIdentifier } from "../../domain/shared/shared.types";

/**
 * UUID v4 (完全ランダム) を生成するジェネレーター
 * 機密性が重要な ID (UserId など) に使用。
 */
export class UuidV4Generator<T extends IIdentifier> implements IIdGenerator<T> {
  public generate(): T {
    return uuidv4() as unknown as T;
  }
}

/**
 * UUID v7 (時系列ベース) を生成するジェネレーター
 * DB インデックス効率が重要な ID (ProfileId など) に使用。
 */
export class UuidV7Generator<T extends IIdentifier> implements IIdGenerator<T> {
  public generate(): T {
    return uuidv7() as unknown as T;
  }
}
