import React from 'react';
import {BotonMenu, DivMenu, ImgMenu} from '../elementos/menuEl';   
import { useNavigate } from 'react-router-dom';
import axios from "axios";  


function Menu() {
  const navigate = useNavigate();

  return (
    <DivMenu>
      <BotonMenu id="item-1" onClick={() => navigate('/registrar-reserva')}>Registrar Reserva</BotonMenu>
      <BotonMenu id="item-2" onClick={() => navigate('/listar-reservas-dia')}>Listar Reservas para un día</BotonMenu>
      <BotonMenu id="item-3" onClick={() => navigate('/listar-reservas-curso')}>Listar Reservas para un curso</BotonMenu>
      <BotonMenu id="item-4" onClick={() => navigate('/buscar-bedel')}>Buscar Bedel</BotonMenu>
      <BotonMenu id="item-5" onClick={() => {
        getPoliticas()
        navigate('/registrar-bedel')
      }
      }>Registrar Bedel</BotonMenu>
      <ImgMenu id="imagen-menu" src="../../utn-menu.png"></ImgMenu>
    </DivMenu>
  );
}

const getPoliticas = async () => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/RegistrarBedel";
    const respuesta = await axios.get(url);
    // console.log(respuesta.data);
    return respuesta.data;
  } catch (error) {
    console.error(error);
  }
};

export { Menu, getPoliticas };