import { Product } from "@/types";

export async function fetchProduct(id: string): Promise<Product>
{
    const res = await fetch(`https://api-rakuten-vis.koyeb.app/product/${id}`);

    if (!res.ok)
        throw new Error(`Failed to fetch product ${id}`);
    return res.json();
}
