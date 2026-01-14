import products from "../public/bestSellingProducts.json";
import { Product } from "@/types/product";

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
