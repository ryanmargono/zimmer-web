export type StringInput = {
  value: string;
};

export type QueryArgs<T> = {
  where: Partial<T>;
  options?: {
    createdAtUpperBounds?: string | null;
    limit?: number;
    offset?: number;
    sortField?: string;
    sortOrder?: string;
  };
  relation?: {
    name: string;
    propertyName: string;
    propertyValue: string;
  };
};
