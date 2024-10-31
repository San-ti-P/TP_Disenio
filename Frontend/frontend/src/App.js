import React from 'react';
import EstilosGlobal from './estilos/estilosGlobal';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Menu} from './componentes/menu';
import RegistrarReserva from './paginas/RegistrarReserva';
import ListarReservasDia from './paginas/ListarReservasDia';
import ListarReservasCurso from './paginas/ListarReservasCurso';
import BuscarBedel from './paginas/BuscarBedel';
import RegistrarBedel from './paginas/RegistrarBedel';

function App() {
  return (
    <Router>
      <EstilosGlobal/>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/registrar-reserva" element={<RegistrarReserva />} />
        <Route path="/listar-reservas-dia" element={<ListarReservasDia />} />
        <Route path="/listar-reservas-curso" element={<ListarReservasCurso />} />
        <Route path="/buscar-bedel" element={<BuscarBedel />} />
        <Route path="/registrar-bedel" element={<RegistrarBedel />} />
      </Routes>
    </Router>
  );
}

export default App;
