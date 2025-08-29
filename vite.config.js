import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sitemap from "vite-plugin-sitemap"; // ⚡ default import

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://rimonpramanik.netlify.app", // তোমার লাইভ সাইটের URL
      routes: [
        "/",          // Home page
        "/about",     // About page
        "/projects",  // Projects page
        "/contact",   // Contact page
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
