import { Product } from "@/types";

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api-rakuten-vis.koyeb.app/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch product ${id}`);

  const json = await res.json();
  const data = json.data;

  const product: Product = {
    id: String(data.id),
    name:
      data.cluster?.clusterInfoDto?.h1 ||
      data.headline ||
      data.googleRichCards?.title ||
      "Produit sans nom",
    description:
      data.edito ||
      data.description ||
      data.googleRichCards?.description ||
      "Aucune description disponible.",
    images:
      data.imagesUrls && data.imagesUrls.length > 0
        ? data.imagesUrls
        : data.images?.[0]?.imagesUrls?.entry?.map((e: any) => e.url) || [],
    price: {
      original: Number(
        data.newBestPrice ||
          data.bestPrice ||
          data.collapseBestPrice ||
          data.googleRichCards?.bestPrice ||
          0
      ),
      currency: "EUR",
    },
    rating: data.globalRating
      ? {
          score: data.globalRating.score ?? 0,
          count: data.globalRating.nbReviews ?? 0,
        }
      : data.googleRichCards
      ? {
          score: data.googleRichCards.averageRating ?? 0,
          count: data.googleRichCards.ratingCount ?? 0,
        }
      : undefined,
    breadcrumbs: data.breadcrumbs
      ? data.breadcrumbs.map((b: any) => b.label)
      : [],
  };

  return product;
}
