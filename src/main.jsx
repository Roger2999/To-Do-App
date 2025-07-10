import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoApp } from "./todoApp";
import { UsuariosProvider } from "./context/UsuariosContext/UsuariosProvider";
import { ToastProvider } from "./context/UsuariosContext/ToastProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <UsuariosProvider>
        <ToastProvider>
          <TodoApp />
        </ToastProvider>
      </UsuariosProvider>
    </StrictMode>
  </BrowserRouter>
);
