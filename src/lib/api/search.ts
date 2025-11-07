import { client } from "~/lib/services/meilisearch"
import { SearchResponse } from 'meilisearch';
import { Product } from '~/lib/types/types';

const index = client.index('products');

export async function searchProducts(
    query: string,
    filters?: {
        gender?: string[];
        masterCategory?: string[];
        subCategory?: string[];
        baseColour?: string[];
    }
): Promise<Product[]> {
    "use server";

    try {
        // Build filter string for Meilisearch
        const filterArray: string[] = [];

        if (filters?.gender && filters.gender.length > 0) {
            filterArray.push(`gender IN [${filters.gender.map(g => `"${g}"`).join(', ')}]`);
        }

        if (filters?.masterCategory && filters.masterCategory.length > 0) {
            filterArray.push(`masterCategory IN [${filters.masterCategory.map(c => `"${c}"`).join(', ')}]`);
        }

        if (filters?.subCategory && filters.subCategory.length > 0) {
            filterArray.push(`subCategory IN [${filters.subCategory.map(c => `"${c}"`).join(', ')}]`);
        }

        if (filters?.baseColour && filters.baseColour.length > 0) {
            filterArray.push(`baseColour IN [${filters.baseColour.map(c => `"${c}"`).join(', ')}]`);
        }

        const searchOptions: any = {
            limit: 20,
            attributesToRetrieve: ['productDisplayName', 'brandName', 'masterCategory', 'imageUrls', 'subCategory', 'baseColour', 'season', 'price'],
        };

        // Only add filter if we have filters
        if (filterArray.length > 0) {
            searchOptions.filter = filterArray;
        }

        // Use empty string for query if not provided (will return all results with filters)
        const response: SearchResponse<Product> = await index.search(query || "", searchOptions);

        return response.hits;
    } catch (error) {
        console.error("[Meilisearch] Search error:", error);
        throw new Error("Search failed");
    }
}