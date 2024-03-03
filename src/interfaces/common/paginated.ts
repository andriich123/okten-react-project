export interface IPaginated<T> {
  total_pages: number;
  total_results: number;
  page: number;
  results: T[];
}
