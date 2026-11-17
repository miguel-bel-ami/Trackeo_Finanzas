import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './auth/ProtectRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/login" element={<Login />} />

                {/* Rutas protegidas */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* Ruta principal */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;