import React from 'react';
import { BotonMenu, DivMenu, ImgMenu } from '../elementos/menuEl.js';
import { useNavigate } from 'react-router-dom';
import { getPoliticas } from '../services/api.js'; 

// Menu dirigido al ADMINISTRADOR
// El administrador puede: RegistrarBedel, ModificarBedel, EliminarBedel, BuscarBedel

function MenuAdm() {
  const navigate = useNavigate();
  
  return (
    <DivMenu>
      <ImgMenu src="../../utn-menu.png" />
      <div className="contenedor-botones">
        <BotonMenu onClick={() => navigate('/buscar-bedel')}>Buscar Bedel</BotonMenu>
        <BotonMenu onClick={() => { getPoliticas(); navigate('/registrar-bedel'); }}>Registrar Bedel</BotonMenu>
      </div>

      <button className="salir" onClick={() => navigate("/login")}>Salir</button>
    </DivMenu>
  );
}

export { MenuAdm };