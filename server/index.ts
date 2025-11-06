import express from "express";
import compression from "compression";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo";
import { handlePing } from "./routes/ping";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

export const app = express();

export async function setupApp() {
  // Adicionar compressão gzip para todas as respostas
  app.use(compression());
  
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.use(express.json());

  // API routes
  app.get("/api/ping", handlePing);
  app.get("/api/demo", handleDemo);

  if (isProduction) {
    const publicPath = path.join(__dirname, "..", "public");
    // Servir arquivos estáticos com cache headers
    app.use(express.static(publicPath, {
      maxAge: '1y',
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        // Cache mais agressivo para imagens
        if (path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png') || path.endsWith('.webp')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));
    app.get("*", (req, res) => {
      res.sendFile(path.join(publicPath, "index.html"));
    });
  }
}

// Inicializa o app imediatamente
setupApp();

// Só inicia o servidor HTTP se não estiver rodando como Netlify Function
if (!process.env.NETLIFY && !process.env.AWS_LAMBDA_FUNCTION_NAME) {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
