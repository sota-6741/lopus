import { v4 as uuidv4, v7 as uuidv7 } from "uuid";
import { IIdGenerator } from "../../domain/shared/service/id-generator.interface";
import { IIdentifier } from "../../domain/shared/shared.types";

export class UuidV4Generator<T extends IIdentifier> implements IIdGenerator<T> {
  public generate(): T {
    return uuidv4() as unknown as T;
  }
}

export class uuidV7Generator<T extends IIdentifier> implements IIdGenerator<T> {
  public generate(): T {
    return uuidv7() as unknown as T;
  }
}
