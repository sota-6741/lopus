import { IIdentifier } from "../shared.types";

export interface IIdGenerator<T extends IIdentifier> {
  generate(): T;
}
