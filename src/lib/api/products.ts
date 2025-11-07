import { getKV } from "../services/nats";
import {Product, ArticleAttributes, ImageUrls} from '~/lib/types/types'


let productIds: string[] = [];
let productCache: Map<string, Product> = new Map();

export async function getProducts(): Promise<Product[]> {
    "use server";
    const kv = await getKV("products");
    const products: Product[] = [];
    
    if (productIds.length === 0) {
        // Loop and fill productIds directly with the keys
        const keys = await kv.keys();
        await (async () => {
            for await (const k of keys) {
                productIds.push(k);
                if (productIds.length >= 2) {
                    break;
                }
            }
        })();
    }
    
    const textDecoder = new TextDecoder();
    // Process each key from the global productIds
    for (const key of productIds) {
        // Check cache first
        if (productCache.has(key)) {
            products.push(productCache.get(key)!);
        } else {
            // Fetch from NATS if not in cache
            const entry = await kv.get(key);
            if (entry) {
                const product = JSON.parse(textDecoder.decode(entry.value)) as Product;
                // Cache the product
                productCache.set(key, product);
                products.push(product);
            }
        }
    }

    return products;
}

