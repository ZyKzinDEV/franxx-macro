import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";

const STATS_FILE = path.join(process.cwd(), 'stats.json');

async function getDownloadsCount() {
  try {
    const data = await fs.readFile(STATS_FILE, 'utf-8');
    const stats = JSON.parse(data);
    return stats.downloads || 0;
  } catch (error) {
    return 0;
  }
}

async function incrementDownloadsCount() {
  const currentCount = await getDownloadsCount();
  const newCount = currentCount + 1;
  await fs.writeFile(STATS_FILE, JSON.stringify({ downloads: newCount }), 'utf-8');
  return newCount;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/downloads", async (req, res) => {
    try {
      const count = await getDownloadsCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: "Failed to read stats" });
    }
  });

  app.post("/api/downloads", async (req, res) => {
    try {
      const count = await incrementDownloadsCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: "Failed to update stats" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
