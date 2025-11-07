// src/routes/images/[id]/[variant].ts
import type { APIEvent } from "@solidjs/start/server";
import { getObjectStore } from "~/lib/services/nats";

export async function GET({ params }: APIEvent) {
  const { id, variant } = params;

  // Build your NATS object key however you store them
  // e.g. "1628/default.jpg"
  const key = `${id}/${variant}.jpg`;
  console.log("Fetching image with key:", key);

  const os = await getObjectStore("product_images");

  try {
    const obj = await os.get(key);
    if (!obj) {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(obj.data, {
      headers: {
        "Content-Type": obj.info.headers?.get("Content-Type") ?? "image/jpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("[NATS] Image fetch failed:", err);
    return new Response("Image not found", { status: 404 });
  }
}
