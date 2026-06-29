import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AllData } from "./components/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllData>
      <App />
    </AllData>
  </StrictMode>,
);
