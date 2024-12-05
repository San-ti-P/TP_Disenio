import React from "react";
import { Navigate } from "react-router-dom";
import { isAutenticado, obtenerRolUsuario } from "../services/autenticacion";

const ProtectedRoute = ({ children, rolesPermitidos }) => {
  if (!isAutenticado()) {
    return <Navigate to="/login" />;
  }

  if (!rolesPermitidos.includes(obtenerRolUsuario())) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;