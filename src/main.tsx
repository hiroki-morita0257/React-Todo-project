import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/App.scss"; // ← Sass を使う前提。ファイルは後で作る

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
