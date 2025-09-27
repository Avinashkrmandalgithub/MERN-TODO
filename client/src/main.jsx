import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "10px",
            padding: "12px 16px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
