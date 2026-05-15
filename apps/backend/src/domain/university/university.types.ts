import { IIdentifier } from "../shared/shared.types";

export type UniversityId = string &
  IIdentifier & { readonly __brand: "UniversityId" };
export type UniversityName = string & { readonly __brand: "UniversityName" };
export type UniversityDomain = string & {
  readonly __brand: "UniversityDomain";
};
