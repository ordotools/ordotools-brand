import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Ensure dist directory exists
const distPath = path.join(__dirname, "dist");
if (!fs.existsSync(distPath)) {
  console.log("Dist directory not found, creating...");
  fs.mkdirSync(distPath, { recursive: true });
}

app.use("/v1", express.static(path.join(__dirname, "dist", "v1"), {
  etag: true, lastModified: true,
  setHeaders: (res) => res.setHeader("Cache-Control", "public, max-age=31536000, immutable")
}));

app.use("/latest", express.static(path.join(__dirname, "dist", "latest"), {
  etag: true, lastModified: true,
  setHeaders: (res) => res.setHeader("Cache-Control", "public, max-age=300")
}));

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Index file not found. Please run 'npm run build' first.");
  }
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Brand CDN running on :${port}`));
