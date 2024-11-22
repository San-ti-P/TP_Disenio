import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function ModificarEliminarBedel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { valores } = location.state || { valores: [] };

  const handleElimimar = () => {
    alert("Eliminaste");
  }

  const handleModificar = () => {
    alert("Modificaste");
  }

  return (
    <div style={{ height: '90vh', width: "100vh", display: 'flex', flexDirection: 'column', marginBottom: "2%"}}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '10px',
        position: 'relative',
        paddingLeft: '8px' 
      }}>
        <StyledIconButton 
          onClick={() => navigate("/buscar-bedel")}
          size="medium"
          style={{ 
            position: 'absolute',
            left: -230,
            width: '35px',
            height: '35px'
          }}
        >
          <ArrowBackIcon style={{ fontSize: '25px' }} />
        </StyledIconButton>
        <h2 style={{ 
          margin: '0 auto',
        }}>
          Resultados de la búsqueda
        </h2>
      </div>

      <TableContainer
        component={Paper}
        style={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Table stickyHeader aria-label="customized table" style={{ height: "99%" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Apellido</StyledTableCell>
              <StyledTableCell>Turno</StyledTableCell>
              <StyledTableCell>Identificador</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valores.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.nombre}</StyledTableCell>
                <StyledTableCell>{row.apellido}</StyledTableCell>
                <StyledTableCell>{row.turno}</StyledTableCell>
                <StyledTableCell>{row.identificador}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    onClick = {handleModificar}
                    variant="contained"
                    color="info"
                    size="small"
                    style={{ marginRight: '8px' }}
                  >
                    Modificar
                  </Button>
                  <Button onClick={handleElimimar} variant="contained" color="error" size="small">
                    Eliminar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}