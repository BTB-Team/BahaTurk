import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const originalFetch = window.fetch;
window.fetch = async function (url, options) {
  if (typeof url === 'string') {
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (isGitHubPages) {
      // اگر روی گیت‌هاب بود، به جای آدرس‌های لوکال، فایل db.json کنار پروژه را صدا می‌زند
      if (url.includes('localhost:3001') || url.startsWith('/db.json') || url === 'db.json' || url === '/db.json') {
        url = 'db.json'; 
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
