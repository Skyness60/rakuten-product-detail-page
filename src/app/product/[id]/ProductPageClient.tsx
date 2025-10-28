"use client";

import { HydrationBoundary } from "@tanstack/react-query";
import { useProduct } from "@/hooks/useProduct";
import ProductImages from "@/components/Product/ProductImages";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductBreadcrumbs from "@/components/Product/ProductBreadcrumbs";
import ProductLoading from "@/components/Product/ProductLoading";
import ProductError from "@/components/Product/ProductError";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import SafeHtml from "@/components/Product/SafeHtml";

export default function ProductPageClient({
  id,
  dehydratedState,
}: {
  id: string;
  dehydratedState: unknown;
}) {
  return (
    <HydrationBoundary state={dehydratedState as import("@tanstack/react-query").DehydratedState}>
      <ProductContent id={id} />
    </HydrationBoundary>
  );
}

function ProductContent({ id }: { id: string }) {
  const { data, isLoading, isError, error } = useProduct(id);

  if (isLoading) return <ProductLoading />;
  if (isError || !data)
    return (
      <ProductError message={error instanceof Error ? error.message : "Could not load product."} />
    );

  console.log("Product description:", data.description);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <ProductBreadcrumbs breadcrumbs={data.breadcrumbs ?? []} />
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ProductImages images={data.images} name={data.name} />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <ProductDetails product={data} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ typography: "body1", color: "text.secondary" }}>
        {data.description ? <SafeHtml html={data.description} /> : "No description provided."}
      </Box>
    </Box>
  );
}
