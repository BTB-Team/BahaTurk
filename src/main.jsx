import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// بازنویسی هوشمند میتود fetch مرورگر برای اصلاح خودکار تمام آدرس‌ها
const originalFetch = window.fetch;
window.fetch = async function (url, options) {
  if (typeof url === 'string') {
    // اگر آدرس به صورت مطلق بود، اسلش اول را حذف می‌کند تا نسبی شود
    if (url.startsWith('/db.json')) {
      url = 'db.json';
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
