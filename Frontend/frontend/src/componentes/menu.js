import React from 'react';
import { BotonMenu, DivMenu, ImgMenu } from '../elementos/menuEl';
import { useNavigate } from 'react-router-dom';
import { getPoliticas } from '../services/api.js'; 

function Menu() {
  const navigate = useNavigate();

  return (
    <DivMenu>
      <BotonMenu id="item-1" onClick={() => navigate('/registrar-reserva')}>Registrar Reserva</BotonMenu>
      <BotonMenu id="item-2" onClick={() => navigate('/listar-reservas-dia')}>Listar Reservas para un día</BotonMenu>
      <BotonMenu id="item-3" onClick={() => navigate('/listar-reservas-curso')}>Listar Reservas para un curso</BotonMenu>
      <BotonMenu id="item-4" onClick={() => navigate('/buscar-bedel')}>Buscar Bedel</BotonMenu>
      <BotonMenu id="item-5" onClick={() => {
        getPoliticas();
        navigate('/registrar-bedel');
      }}>Registrar Bedel</BotonMenu>
      <ImgMenu id="imagen-menu" src="../../utn-menu.png" />
    </DivMenu>
  );
}

export { Menu };
