import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    // Habilitar suporte para arquivos JSON como módulos
    namedExports: true,
    stringify: false,
  },
});
