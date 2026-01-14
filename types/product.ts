export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  oldPrice?: number;
  currency: string;
  rating: number;
  reviews: number;
  stock: number;
  isBestSeller?: boolean;
  image: string;
  gallery: string[];
  features: string[];
  dimensions: {
    width: string;
    depth: string;
    height: string;
  };
  description?: string;
}
