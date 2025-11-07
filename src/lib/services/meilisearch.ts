import { Meilisearch } from 'meilisearch'

// Get environment variables with fallbacks
const MEILISEARCH_URL = process.env.MEILISEARCH_URL || "http://localhost:7700";
const MEILISEARCH_API_KEY = process.env.MEILISEARCH_API_KEY || 'YOUR_API_KEY';

export const client = new Meilisearch({
    host: MEILISEARCH_URL,
    apiKey: MEILISEARCH_API_KEY,
})
