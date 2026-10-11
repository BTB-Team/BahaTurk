import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/BahaTurk/", // 👈 مطمئن شوید اسلش ابتدا و انتها دقیقاً به همین صورت باشد
  server: {
    port: 5173,
  },
  build: {
    // این تنظیم به Vite می‌گوید ساختار فایل‌های خروجی را کاملاً استاندارد و بدون تداخل با پوشه src بسازد
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
