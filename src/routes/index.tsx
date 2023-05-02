import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Navigate to="/home" />} />
		</Routes>
	);
}
