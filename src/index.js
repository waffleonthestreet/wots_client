import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { AuthProvider } from "./contexts/JWTContext.js";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
