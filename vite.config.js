import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Reverted completely to your proven repository subfolder lock
  base: "/BahaTurk/", 
  server: {
    port: 5173,
  },
});
