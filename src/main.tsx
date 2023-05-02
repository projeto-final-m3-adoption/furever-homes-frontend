import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { PetProvider } from "./providers/petContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PetProvider>
        <App />
      </PetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
