import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/ayushgpt01/rock-paper-scissors",
  plugins: [react(), svgr()],
});
