import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/BahaTurk/", // این خط به مرورگر می‌گوید تمام فایل‌های بیلد شده را در زیرپوشه BahaTurk جستجو کند
  server: {
    port: 5173,
  },
});
