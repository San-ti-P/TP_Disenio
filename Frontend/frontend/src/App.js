import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MenuAdm } from "./paginas/menuAdm";
import { MenuBedel } from "./paginas/menuBedel";
import RegistrarReserva from "./paginas/RegistrarReserva";
import ListarReservasDia from "./paginas/ListarReservasDia";
import ListarReservasCurso from "./paginas/ListarReservasCurso";
import BuscarBedel from "./paginas/BuscarBedel";
import RegistrarBedel from "./paginas/RegistrarBedel";
import Login from "./paginas/logIn";
import ProtectedRoute from "./componentes/rutaProtegida";
import EstilosGlobal from './estilos/estilosGlobal';

function App() {
  return (
    <Router>
      <EstilosGlobal/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rutas para Administradores */}
        <Route
          path="/menuAdm"
          element={
            <ProtectedRoute rolesPermitidos={["admin"]}>
              <MenuAdm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buscar-bedel"
          element={
            <ProtectedRoute rolesPermitidos={["admin"]}>
              <BuscarBedel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registrar-bedel"
          element={
            <ProtectedRoute rolesPermitidos={["admin"]}>
              <RegistrarBedel />
            </ProtectedRoute>
          }
        />

        {/* Rutas para Bedeles */}
        <Route
          path="/menuBedel"
          element={
            <ProtectedRoute rolesPermitidos={["bedel"]}>
              <MenuBedel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registrar-reserva"
          element={
            <ProtectedRoute rolesPermitidos={["bedel"]}>
              <RegistrarReserva />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listar-reservas-dia"
          element={
            <ProtectedRoute rolesPermitidos={["bedel"]}>
              <ListarReservasDia />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listar-reservas-curso"
          element={
            <ProtectedRoute rolesPermitidos={["bedel"]}>
              <ListarReservasCurso />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;