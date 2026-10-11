import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* اضافه کردن ویژگی basename با نام دقیق ریپازیتوری شما */}
    <BrowserRouter basename="/BahaTurk">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
