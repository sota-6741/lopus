import { UserId } from "./value-objects/UserId.value-object";

export interface IUserIdGenerator {
  nextId(): UserId;
}
