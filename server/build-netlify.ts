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

  await build({
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
          'fs'
        ]
      },
      ssr: true,
      emptyOutDir: false,
      minify: false
    }
  });
  
  console.log('✓ Netlify function built successfully');
}

buildNetlifyFunction().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
