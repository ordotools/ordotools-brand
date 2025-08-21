import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use("/v1", express.static(path.join(__dirname, "dist", "v1"), {
  etag: true, lastModified: true,
  setHeaders: (res) => res.setHeader("Cache-Control", "public, max-age=31536000, immutable")
}));

app.use("/latest", express.static(path.join(__dirname, "dist", "latest"), {
  etag: true, lastModified: true,
  setHeaders: (res) => res.setHeader("Cache-Control", "public, max-age=300")
}));

app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (_, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Brand CDN running on :${port}`));
