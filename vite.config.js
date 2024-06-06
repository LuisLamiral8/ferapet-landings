import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  base: "/", // Asegúrate de que este valor sea correcto para tu entorno
});
