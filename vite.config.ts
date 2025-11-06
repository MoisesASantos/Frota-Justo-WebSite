import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  build: {
    outDir: "dist/public",
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor bundles para melhor caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Otimizações de build
    cssCodeSplit: true,
    minify: 'esbuild', // Mais rápido que terser
    // Aumentar limite de aviso de chunk
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 8080,
  },
  // Otimizações de performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
