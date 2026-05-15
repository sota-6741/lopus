import type {
  UniversityId,
  UniversityName,
  UniversityDomain,
} from "../university.types";

export class University {
  private constructor(
    private readonly _id: UniversityId,
    private readonly _name: UniversityName,
    private readonly _domain: UniversityDomain,
  ) {}

  public static fromPersistence(
    id: UniversityId,
    name: UniversityName,
    domain: UniversityDomain,
  ): University {
    return new University(id, name, domain);
  }

  // Getters
  get id(): UniversityId {
    return this._id;
  }

  get name(): UniversityName {
    return this._name;
  }

  get domain(): UniversityDomain {
    return this._domain;
  }
}
