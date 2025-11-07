import { getObjectStore } from "~/lib/services/nats";
import type { APIEvent } from "@solidjs/start/server";

export async function GET({ params }: APIEvent) {
  'use server';
  // Decode the key since it will be URL encoded (43059%2Fdefault.jpg -> 43059/default.jpg)
  const key = decodeURIComponent(params.key);
  console.log("[API] Fetching image with key:", key);
  
  const os = await getObjectStore("product-images");

  try {
    const obj = await os.get(key);
    if (!obj) {
      console.error("[API] Image not found:", key);
      return new Response("Image not found", { status: 404 });
    }

    console.log("[API] Successfully fetched image:", key);
    
    return new Response(obj.data, {
      headers: {
        "Content-Type": obj.info.headers?.get("Content-Type") ?? "image/jpeg",
        "Cache-Control": "public, max-age=31536000", // Cache for 1 year since images don't change
      },
    });
  } catch (err) {
    console.error("[API] Failed to fetch image:", key, err);
    return new Response("Image not found", { status: 404 });
  }
}