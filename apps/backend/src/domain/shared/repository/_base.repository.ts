// https://github.com/leojsantos/typescript-unit-of-work/blob/main/src/application/repositories/_base.repository.ts参考
export interface BaseRepository {
  transaction(client: unknown): void;
}

export type RepositoryPick<T extends BaseRepository, K extends keyof T> = Pick<
  T,
  K | "transaction"
>;
