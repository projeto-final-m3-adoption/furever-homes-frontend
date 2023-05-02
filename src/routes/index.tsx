import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PageNotFound } from "../pages/PageNotFound";
import { UserProvider } from "../providers/userContext";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={
          <UserProvider>
            <Register />
          </UserProvider>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
