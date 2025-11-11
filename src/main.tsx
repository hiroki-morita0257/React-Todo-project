import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.scss"; // ← Sass を使う前提。ファイルは後で作る

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
