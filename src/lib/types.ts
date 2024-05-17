import { IUser } from '../interfaces/IUser.ts';

export type Tree<T> = {
  value: T;
  children: Tree<T>[];
};

export type UserWithoutId = Omit<IUser, 'id'>;

export type Predicate = (value: unknown) => boolean;
export type Filters = Record<string, Predicate>;
