// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

import { closeNatsConnection } from "./lib/services/nats";

// Handle process termination
process.on("SIGTERM", async () => {
  console.log("[Server] Shutting down...");
  await closeNatsConnection();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("[Server] Shutting down...");
  await closeNatsConnection();
  process.exit(0);
});

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
