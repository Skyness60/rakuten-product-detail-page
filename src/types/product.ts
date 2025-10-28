export interface Product {
  id: string;
  name: string;
  description?: string;
  images: string[];
  price:
  {
    original: number;
    discounted?: number;
    currency: string;
  };
  rating?:
  {
    score: number;
    count: number;
  };
  breadcrumbs?: string[];
}
