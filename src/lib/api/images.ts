import { getObjectStore } from "~/lib/services/nats";
import type { APIEvent } from "@solidjs/start/server"; // 👈 SolidStart's API event type

export async function GET({ params }: APIEvent) {
  const key = params.key;
  const os = await getObjectStore("product-images");
  console.log(os.info);

  try {
    const obj = await os.get(key);
    if (!obj) {
      // 👈 handles "possibly null" case
      return new Response("Image not found", { status: 404 });
    }

    return new Response(obj.data, {
      headers: {
        "Content-Type": obj.info.headers?.get("Content-Type") ?? "image/jpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("[NATS] Failed to fetch image:", err);
    return new Response("Image not found", { status: 404 });
  }
}
