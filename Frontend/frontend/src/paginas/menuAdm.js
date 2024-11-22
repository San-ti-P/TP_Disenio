import React from 'react';
import { BotonMenu, DivMenu, ImgMenu } from '../elementos/menuEl.js';
import { useNavigate } from 'react-router-dom';
import { getPoliticas } from '../services/api.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {StyledIconButton} from '../elementos/tablaResultados';

// Menu dirigido al ADMINISTRADOR
// El administrador puede: RegistrarBedel, ModificarBedel, EliminarBedel, BuscarBedel

function MenuAdm() {
  const navigate = useNavigate();
  
  return (
    <DivMenu>
      <StyledIconButton onClick={() => navigate("/login")} size="medium" >
          <ArrowBackIcon style={{ fontSize: '25px' }} />
      </StyledIconButton>

      <ImgMenu src="../../utn-menu.png" />
      <div className="contenedor-botones">
        <BotonMenu onClick={() => navigate('/buscar-bedel')}>Buscar Bedel</BotonMenu>
        <BotonMenu onClick={() => { getPoliticas(); navigate('/registrar-bedel'); }}>Registrar Bedel</BotonMenu>
      </div>

    </DivMenu>
  );
}

export { MenuAdm };