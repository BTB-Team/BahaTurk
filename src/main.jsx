import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// مبدل هوشمند درخواست‌های شبکه برای هماهنگی لوکال و سرور گیت‌هاب
const originalFetch = window.fetch;
window.fetch = async function (url, options) {
  if (typeof url === 'string') {
    const isGitHubPages = window.location.hostname.includes('github.io');

    if (isGitHubPages) {
      // اگر روی گیت‌هاب بود، هر درخواستی به پورت لوکال یا مسیر دیتابیس را به فایل آنلاین روت هدایت می‌کند
      if (url.includes('localhost:3001') || url.startsWith('/db.json') || url === 'db.json') {
        url = '/BahaTurk/db.json'; 
      }
    }
  }
  return originalFetch(url, options);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* اضافه کردن ویژگی basename با نام دقیق ریپازیتوری  */}
    <BrowserRouter basename="/BahaTurk">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
