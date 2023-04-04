export type Data<T> = {
  info: {
    count: number;
    pages: number;
  }
  results: T[];
};