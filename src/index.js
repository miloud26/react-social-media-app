import React from "react";
import ReactDOM from "react-dom/client";
import "./app.scss";
import App from "./App";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);