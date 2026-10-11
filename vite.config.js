import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/BahaTurk/", //این خط برای آدرس‌دهی درست فایل‌ها در گیت‌هاب پیجز اضافه شد
  server: {
    port: 5173,
  },
});
