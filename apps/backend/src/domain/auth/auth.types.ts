// 認証用トークン文字列
export type VerificationToken = string & {
  readonly __brand: "VerificationToken";
};

// 認証トークン期限
export type TokenExpiresAt = Date & { readonly __brand: "TokenExpiresAt" };
