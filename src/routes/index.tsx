import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Shop } from "../pages/Shop";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}
