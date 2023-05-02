import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { UserProvider } from "../providers/userContext";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route
        path="/register"
        element={
          <UserProvider>
            <Register />
          </UserProvider>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
=======
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
>>>>>>> 1cd9b7ff63dab9e96cc2faca69f0e3f2a2c9a957
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
