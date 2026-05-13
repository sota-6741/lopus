// Identifier
export type UserId = string & { readonly __brand: "UserId" };
export type ProfileId = string & { readonly __brand: "ProfileId" };

// User
export type UserRole = "admin" | "general";

// Profile
export type UserName = string & { readonly __brand: "UserName" };
export type IconUrl = string & { readonly __brand: "IconUrl" };

// University (Reference)
export type UniversityId = string & { readonly __brand: "UniversityId" };

// Password
export type HashedString = string & { readonly __brand: "HashedString" };
