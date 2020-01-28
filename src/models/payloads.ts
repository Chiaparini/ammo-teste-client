import { Product } from "./product";

export interface QueryPayload {
  query: string
}

export interface ProductsPayload {
  products: Array<Product>;
  total: number;
  pages: number;
}

export interface LimitPagePayload {
  page?: number;
  limit?: number;
}