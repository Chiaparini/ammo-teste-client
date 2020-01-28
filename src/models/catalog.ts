import { Product } from "./product";

export interface Catalog {
  loading: boolean;
  products: Array<Product>;
  error: boolean;
  pages: number;
  query: string;
  title: string;
  limit: number;
  page: number;
  total: number;
}