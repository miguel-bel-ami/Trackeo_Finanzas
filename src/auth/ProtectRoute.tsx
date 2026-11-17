import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

function ProtectedRoute() {

    const { user, loading } = useAuth();

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet></Outlet>;
}

export default ProtectedRoute;