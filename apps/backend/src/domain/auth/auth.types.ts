/**
 * 認証用トークン文字列（Branded Type）
 */
export type VerificationToken = string & {
  readonly __brand: "VerificationToken";
};

/**
 * 有効期限（Dateのラッパー、または単なるDateとして扱うBranded Type）
 */
export type TokenExpiresAt = Date & { readonly __brand: "TokenExpiresAt" };
