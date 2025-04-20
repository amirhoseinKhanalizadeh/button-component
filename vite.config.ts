import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/tests/setup.ts"],
    include: ["src/**/*,{test,spec}.{ts,tsx}"],
  },
  build: {
    lib: {
      entry: "src/index.ts", // The entry point for your library
      name: "ButtonComponent", // The name of your library
      fileName: "index", // Output file name without extension
      formats: ["es", "umd"], // Specify which formats to output (ES and UMD)
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude these from the bundle
    },
  },
});
