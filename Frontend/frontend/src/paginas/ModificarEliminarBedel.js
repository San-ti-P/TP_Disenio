import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { StyledContainer, StyledHeader, StyledHeading, StyledTableContainer, StyledTableCell, StyledTableRow } from '../elementos/tablaResultados';
import { manejoEliminar } from '../componentes/logicEliminar';
import { ManejoModificar } from '../componentes/logicModificar';
import BackButton from '../componentes/backButton';

export default function ModificarEliminarBedel() {

  const location = useLocation();
  const [valores, setValores] = useState(location.state?.valores || []);
  const [politicasTooltip, setPoliticasTooltip] = useState(location.state?.politicas || "");
  const [criteriosBusqueda, setCriteriosBusqueda] = useState({
    apellido: location.state?.apellido || '',
    turno: location.state?.turno || ''
  });

  const handleEliminar = async (bedel) => {
    await manejoEliminar(bedel, () => {
      setValores((prevValores) => prevValores.filter((item) => item.id_usuario !== bedel.id_usuario));
    });
  };

  const actualizarFila = (bedelModificado) => {
    setValores((prevValores) =>
      prevValores
        .map((item) =>
          item.id_usuario === bedelModificado.id_usuario ? { ...item, ...bedelModificado } : item
        )
        .filter((item) =>
          (criteriosBusqueda.apellido === '' || item.apellido.includes(criteriosBusqueda.apellido)) &&
          (criteriosBusqueda.turno === '' || item.turno === criteriosBusqueda.turno)
        )
    );
  };


  const valores_activo = valores.filter(valor => valor.activo).sort((a, b) => a.id_usuario.localeCompare(b.id_usuario));
  console.log("Arreglo de bedeles activos: ", valores_activo);

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
              <StyledTableCell width="18%">Nombre</StyledTableCell>
              <StyledTableCell width="18%">Apellido</StyledTableCell>
              <StyledTableCell width="16%">Turno</StyledTableCell>
              <StyledTableCell width="15%">Identificador</StyledTableCell>
              <StyledTableCell width="20%" align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {valores_activo.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                No hay resultados para la búsqueda
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            valores_activo.filter(row => row.activo).map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.nombre}</StyledTableCell>
                <StyledTableCell>{row.apellido}</StyledTableCell>
                <StyledTableCell>{row.turno}</StyledTableCell>
                <StyledTableCell>{row.id_usuario}</StyledTableCell>
                <StyledTableCell width="5fr" align="center">
                  <ManejoModificar bedel={row} actualizarFila={actualizarFila} politicasTooltip={politicasTooltip} />
                  <Button 
                    onClick={() => handleEliminar(row)} 
                    color="error"
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledContainer>
  );
}