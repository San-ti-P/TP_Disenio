import React from 'react';
import { BotonMenu, DivMenu, ImgMenu } from '../elementos/menuEl.js';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {StyledIconButton} from '../elementos/tablaResultados';

// Menu dirigido al BEDEL
// El bedel puede: ListarReservas, ModificarAula, RegistrarReserva, ObtenerDisponibilidadAulas, BuscarAulas

function MenuBedel() {
  const navigate = useNavigate();
  return (

    <DivMenu>
      <StyledIconButton onClick={() => navigate("/login")} size="medium" >
          <ArrowBackIcon style={{ fontSize: '25px' }} />
      </StyledIconButton>
      
      <div className="contenedor-botones">
        <BotonMenu onClick={() => navigate('/listar-reservas-dia')}>Listar Reservas para un día</BotonMenu>
        <BotonMenu onClick={() => navigate('/registrar-reserva')}>Registrar Reserva</BotonMenu>
        <BotonMenu onClick={() => navigate('/listar-reservas-curso')}>Listar Reservas para un curso</BotonMenu>
      </div>
      <ImgMenu src="../../utn-menu.png" />
    </DivMenu>
  );
}

export { MenuBedel };