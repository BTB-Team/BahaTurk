import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // اگر در حال بیلد نهایی برای دیپلوی آنلاین بود، مسیر را کاملاً نسبی قرار می‌دهد تا با راوتر تداخل پیدا نکند
  base: command === 'build' ? './' : '/', 
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        // حذف هش‌ها برای جلوگیری از رفتارهای عجیب کش سرور گیت‌هاب
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}));
