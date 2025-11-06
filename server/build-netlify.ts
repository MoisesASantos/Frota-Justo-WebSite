import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildNetlifyFunction() {
  const outDir = path.resolve(__dirname, '../dist/functions');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Limpar apenas os arquivos .js e .cjs antigos
  const files = fs.readdirSync(outDir);
  files.forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')) {
      fs.unlinkSync(path.join(outDir, file));
    }
  });

  await build({
    configFile: false, // Não usar vite.config.ts
    publicDir: false, // Não copiar arquivos públicos
    build: {
      outDir,
      lib: {
        entry: path.resolve(__dirname, 'netlify.ts'),
        name: 'api',
        fileName: () => 'api.js',
        formats: ['cjs']
      },
      rollupOptions: {
        external: [
          'express',
          '@vendia/serverless-express',
          'lightningcss',
          'esbuild',
          'path',
          'url',
          'fs',
          'http',
          'https',
          'crypto',
          'stream',
          'util',
          'events',
          'buffer',
          'querystring',
        ],
        output: {
          format: 'cjs',
        }
      },
      ssr: true,
      emptyOutDir: false,
      minify: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../client'),
        '@shared': path.resolve(__dirname, '../shared'),
      },
    },
  });
  
  console.log('✓ Netlify function built successfully');
}

buildNetlifyFunction().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
