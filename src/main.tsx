import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "@fontsource-variable/inter";
import "./index.css";

import { Toaster } from "sonner";

import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors />
    <App />
  </StrictMode>,
);
