import { BaseRepository } from "../../shared/repository/_base.repository";

import { University } from "../entity/university.entity";
import type { UniversityId, UniversityDomain } from "../university.types";

export interface UniversityRepository extends BaseRepository {
  findById(id: UniversityId): Promise<University | null>;

  findByDomain(domain: UniversityDomain): Promise<University | null>;

  existsByDomain(domain: UniversityDomain): Promise<boolean>;
}
