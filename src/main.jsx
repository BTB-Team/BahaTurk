import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Switched to HashRouter
import App from "./App";
import ScrollToTop from "./components/ScrollToTop"; // 👈 Imported the scroll correction component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop /> {/* 👈 Injected at the root to instantly force all route changes to start at the top */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
