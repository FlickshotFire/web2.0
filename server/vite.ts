import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express, { type Express } from "express";
import { createServer as createViteServer, type ViteDevServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function setupVite(app: Express, server: any) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
    root: path.resolve(__dirname, "..", "client"),
  });

  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);
  return vite;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}. Make sure to build the client first.`,
    );
  }

  app.use(express.static(distPath));

  // Handle client-side routing - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ error: "API route not found" });
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

export function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(`${formattedTime} [express] ${message}`);
}