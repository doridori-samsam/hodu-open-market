import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hodu-open-market/",
  resolve: {
    alias: {
      path: "path-browserify",
      util: "util/",
    },
  },
});
