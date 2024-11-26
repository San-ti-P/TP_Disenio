// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Paper from '@mui/material/Paper';
// import { StyledContainer, StyledHeader, StyledHeading, StyledIconButton, StyledTableContainer, StyledTableCell, StyledTableRow } from '../elementos/tablaResultados';
// import { manejoEliminar } from '../services/logicEliminar';
// import { manejoModificar } from '../services/logModificar';
// import BackButton from '../componentes/backButton';

// export default function ModificarEliminarBedel() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { valores } = location.state || { valores: [] };
  
//   const handleEliminar = async (bedel) => {
//     manejoEliminar(bedel);
//   };
  
//   const handleModificar = () => {
//     manejoModificar();
//   };

//   return (
//     <StyledContainer>
//       <StyledHeader>
//         <BackButton route="/buscar-bedel"/>
//         <StyledHeading>Resultados de la búsqueda</StyledHeading>
//       </StyledHeader>

//       <StyledTableContainer component={Paper}>
//         <Table stickyHeader aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell width="15%">Nombre</StyledTableCell>
//               <StyledTableCell width="17%">Apellido</StyledTableCell>
//               <StyledTableCell width="17%">Turno</StyledTableCell>
//               <StyledTableCell width="15%">Identificador</StyledTableCell>
//               <StyledTableCell width="25%" align="center">Acciones</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {valores.map((row, index) => (
//               <StyledTableRow key={index}>
//                 <StyledTableCell>{row.nombre}</StyledTableCell>
//                 <StyledTableCell>{row.apellido}</StyledTableCell>
//                 <StyledTableCell>{row.turno}</StyledTableCell>
//                 <StyledTableCell>{row.identificador}</StyledTableCell>
//                 <StyledTableCell width="5fr" align="center">
//                   <Button 
//                     onClick={handleModificar}
//                     color="info"
//                     style={{ marginRight: '0px' }}
//                   >
//                     <EditIcon />
//                   </Button>
//                   <Button 
//                     onClick={() => handleEliminar(row)} 
//                     color="error"
//                   >
//                     <DeleteIcon />
//                   </Button>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </StyledTableContainer>
//     </StyledContainer>
//   );
// }

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { StyledContainer, StyledHeader, StyledHeading, StyledIconButton, StyledTableContainer, StyledTableCell, StyledTableRow } from '../elementos/tablaResultados';
import { manejoEliminar } from '../services/logicEliminar';
import { ManejoModificar } from '../services/logModificar';
import BackButton from '../componentes/backButton';

export default function ModificarEliminarBedel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { valores } = location.state || { valores: [] };
  
  const handleEliminar = async (bedel) => {
    manejoEliminar(bedel);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <BackButton route="/buscar-bedel"/>
        <StyledHeading>Resultados de la búsqueda</StyledHeading>
      </StyledHeader>

      <StyledTableContainer component={Paper}>
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width="15%">Nombre</StyledTableCell>
              <StyledTableCell width="17%">Apellido</StyledTableCell>
              <StyledTableCell width="17%">Turno</StyledTableCell>
              <StyledTableCell width="15%">Identificador</StyledTableCell>
              <StyledTableCell width="25%" align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valores.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.nombre}</StyledTableCell>
                <StyledTableCell>{row.apellido}</StyledTableCell>
                <StyledTableCell>{row.turno}</StyledTableCell>
                <StyledTableCell>{row.identificador}</StyledTableCell>
                <StyledTableCell width="5fr" align="center">
                  {ManejoModificar(row)} {/* tenemos que agregar las contraseñas */}
                  <Button 
                    onClick={() => handleEliminar(row)} 
                    color="error"
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledContainer>
  );
}

