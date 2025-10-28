import { fetchProduct } from "@/api/product";
import { getQueryClient } from "@/lib/queryClient";
import ProductPageClient from "./ProductPageClient";
import { dehydrate } from "@tanstack/react-query";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return <ProductPageClient id={id} dehydratedState={dehydratedState} />;
}
