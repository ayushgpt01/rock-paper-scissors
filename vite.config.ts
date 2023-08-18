import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), svgr()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/rock-paper-scissors/";
  }

  return config;
});
