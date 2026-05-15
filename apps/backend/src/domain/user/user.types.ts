import { IIdentifier } from "../shared/shared.types";

// Identifier
export type UserId = string & IIdentifier & { readonly __brand: "UserId" };
export type ProfileId = string &
  IIdentifier & { readonly __brand: "ProfileId" };

// User
export type UserRole = "admin" | "general";

// Profile
export type UserName = string & { readonly __brand: "UserName" };
export type IconUrl = string & { readonly __brand: "IconUrl" };

// Password
export type HashedPassword = string & { readonly __brand: "HashedPassword" };
