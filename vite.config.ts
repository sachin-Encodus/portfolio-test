import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
  },
  plugins: [
    react(),
    // Only include tempo plugin in development
    ...(process.env.NODE_ENV === "development" ? [
      (await import("tempo-devtools/dist/vite")).tempo()
    ] : [])
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-slot', 'lucide-react']
        }
      }
    }
  }
});