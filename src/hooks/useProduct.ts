"use client";

import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "@/api/product";

export const useProduct = (id?: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id,
    retry: 1,
  });
};
