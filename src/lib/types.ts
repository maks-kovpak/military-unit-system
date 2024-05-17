export type Tree<T> = {
  value: T;
  children: Tree<T>[];
};

export type Predicate = (value: unknown) => boolean;
export type Filters = Record<string, Predicate>;
