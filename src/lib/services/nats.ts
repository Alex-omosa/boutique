import { connect, type NatsConnection, type KV, type ObjectStore } from "nats";

let natsConnection: NatsConnection | null = null;
let kvCache: Map<string, KV> = new Map();
let objCache: Map<string, ObjectStore> = new Map(); // 👈 cache for object stores

export async function getNatsConnection(): Promise<NatsConnection> {
  "use server";
  if (natsConnection) return natsConnection;

  try {
    natsConnection = await connect({
      servers: process.env.NATS_URL || "nats://localhost:4222",
    });

    console.log("[NATS] Connected to NATS server");

    // Handle graceful shutdown
    natsConnection.closed().then((err) => {
      if (err) {
        console.error("[NATS] Connection closed with error:", err);
      } else {
        console.log("[NATS] Connection closed");
      }
    });

    return natsConnection;
  } catch (error) {
    console.error("[NATS] Failed to connect:", error);
    throw new Error("Could not connect to NATS server");
  }
}

export async function getKV(bucketName: string): Promise<KV> {
  "use server";
  if (kvCache.has(bucketName)) return kvCache.get(bucketName)!;

  const nc = await getNatsConnection();
  const js = nc.jetstream();

  let kv: KV;
  try {
    kv = await js.views.kv(bucketName);
  } catch {
    kv = await js.views.kv(bucketName, { history: 0 });
  }

  kvCache.set(bucketName, kv);
  return kv;
}

export async function getObjectStore(bucketName: string): Promise<ObjectStore> {
  "use server";
  if (objCache.has(bucketName)) return objCache.get(bucketName)!;

  const nc = await getNatsConnection();
  const js = nc.jetstream();

  let os: ObjectStore;
  try {
    os = await js.views.os(bucketName);
  } catch {
    os = await js.views.os(bucketName, { description: "Product images" });
  }

  objCache.set(bucketName, os);
  return os;
}

export async function closeNatsConnection() {
  "use server";
  if (natsConnection) {
    await natsConnection.drain();
    natsConnection = null;
    kvCache.clear();
    objCache.clear(); // 👈 clear object store cache too
  }
}
