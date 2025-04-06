import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLoader from "./Components/MainLoader/MainLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<MainLoader />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </StrictMode>
);
