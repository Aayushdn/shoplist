import { createContext, useContext } from "react";

export const ProductDataContext = createContext();

export function useProductData() {
  const context = useContext(ProductDataContext);
  return context;
}
