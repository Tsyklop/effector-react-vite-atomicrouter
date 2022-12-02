import { fileURLToPath, URL } from "node:url";
import babel from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [/*eslint(), */svgr(), babel(), react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
