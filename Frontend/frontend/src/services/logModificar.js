// import React from "react";

// export const manejoModificar = () => {
//     alert("Modificaste");
// } 

import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { Formulario, DivTextoCampoObligatorio, DivBotonesSC } from "../elementos/formularios.js";
import { ComponenteNyAP, ComponenteOtro, ComponenteDesplegableInput } from "../componentes/input.js";
import { CancelarModal, mostrarModalExito } from "../componentes/modal.js";
import { enviarFormulario, getPoliticas } from "./api.js";
import { BotonSubmit, LeyendaError } from '../elementos/formularios.js';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

export const ModificarModal = ({ open, handleClose, bedel }) => {
  const [nombre, cambiarNombre] = useState({campo: bedel.nombre, valido: null});
  const [apellido, cambiarApellido] = useState({campo: bedel.apellido, valido: null});
  const [turno, cambiarTurno] = useState({campo: bedel.turno, valido: null});
  const [idUsuario, cambiarIdUsuario] = useState({campo: bedel.identificador, valido: null});
  const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
  const [contraseña2, cambiarContraseña2] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [animarErrores, cambiarAnimarErrores] = useState(false);
  const [mostrarIDLeyenda, cambiarMostrarIDLeyenda] = useState(false);
  const [mostrarContraLeyenda, cambiarMostrarContraLeyenda] = useState(false);
  const [politicasTooltip, setPoliticasTooltip] = useState('');

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    idUsuario: /^utn-\d{6}$/,
  };

  const validarContraseña2 = () => {
    if(contraseña1.campo.length > 0){
      if(contraseña1.campo !== contraseña2.campo){
        cambiarContraseña2((prevState) => {
          return {...prevState, valido: 'false'}
        })
      } else {
        cambiarContraseña2((prevState) => {
          return {...prevState, valido: 'true'}
        })
      } 
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    
    let hayErrores = false;

    validarContraseña2();

    // Validación de cada campo
    if (nombre.valido !== 'true') {
      cambiarNombre({ campo: nombre.campo, valido: 'false' });
      hayErrores = true;
    }
    if (apellido.valido !== 'true') {
      cambiarApellido({ campo: apellido.campo, valido: 'false' });
      hayErrores = true;
    }
    if (turno.valido !== 'true') {
      cambiarTurno({ campo: turno.campo, valido: 'false' });
      hayErrores = true;
    }
    if (idUsuario.valido !== 'true') {
      cambiarIdUsuario({ campo: idUsuario.campo, valido: 'false' });
      hayErrores = true;
    }
    if (contraseña1.campo && contraseña1.valido !== 'true') {
      cambiarContraseña1({ campo: contraseña1.campo, valido: 'false' });
      hayErrores = true;
    }
    if (contraseña2.campo && contraseña2.valido !== 'true') {
      cambiarContraseña2({ campo: contraseña2.campo, valido: 'false' });
      hayErrores = true;
    }

    if (hayErrores) {
      setTimeout(() => cambiarAnimarErrores(false), 1000);
    } else {
      cambiarFormularioValido(true);
      const datosFormulario = {
        nombre: nombre.campo,
        apellido: apellido.campo,
        turno: turno.campo,
        id_usuario: idUsuario.campo,
        contrasenia: contraseña1.campo || undefined
      };
      
      const respuesta = await enviarFormulario(datosFormulario);

      if (respuesta.error) {
        alert("Ocurrió un error al enviar el formulario");
      } else {
        const respuestaErrores = respuesta.data.errors;
        if (respuestaErrores.length === 0) {
          mostrarModalExito();
          handleClose();
        } else {
          if (respuestaErrores.includes("campos_invalidos")) { 
            alert("Error de campo"); 
          }
          if (respuestaErrores.includes("contrasenia_invalida")){
            cambiarMostrarContraLeyenda(true);
            cambiarContraseña1({ campo: contraseña1.campo, valido: "false" });
          }
          if (respuestaErrores.includes("id_existente")) {
            cambiarMostrarIDLeyenda(true);
            cambiarIdUsuario({ campo: idUsuario.campo, valido: 'false' });
          }
        }
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px' 
      }}>
        <h2 id="modal-modal-title">Modificar Bedel</h2>
        <Formulario onSubmit={onSubmit}>
          <ComponenteNyAP
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Ingrese su nombre"
            name="nombre"
            expresionRegular={expresiones.nombre}
            textoTooltip={nombre.valido === "false" ? "El nombre debe tener mínimo 2 letras y no tener números" : null}
          />
          <ComponenteNyAP
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="text"
            label="Apellido"
            placeholder="Ingrese su apellido"
            name="apellido"
            expresionRegular={expresiones.apellido}
            textoTooltip={apellido.valido === "false" ? "El apellido debe tener mínimo 2 letras y no tener números" : null}
          />
          <ComponenteDesplegableInput 
            estado={turno}
            cambiarEstado={cambiarTurno}
            tipo="text" 
            label="Turno" 
            placeholder="Seleccione un turno"
            name="turno" 
            valores={["Mañana", "Tarde", "Noche"]}
          />
          <ComponenteOtro
            estado={idUsuario}
            cambiarEstado={cambiarIdUsuario}
            tipo="text" 
            label="ID usuario" 
            placeholder="ID de usuario"
            name="idUsuario" 
            expresionRegular={expresiones.idUsuario}
            textoTooltip={`El campo debe comenzar con las letras "utn-" seguidas de exactamente seis dígitos numéricos. \n Ejemplo: utn-123456`}
            comportamientoTooltip="siempre"
            leyendaError={"ID de usuario ya existe"}
            mostrarLeyenda={mostrarIDLeyenda}
            cambiarMostrarLeyenda={cambiarMostrarIDLeyenda}
          />
          <ComponenteOtro 
            estado={contraseña1}
            cambiarEstado={cambiarContraseña1}
            tipo="password" 
            label="Contraseña" 
            placeholder="Ingrese su contraseña"
            name="contraseña" 
            funcion={validarContraseña2}
            textoTooltip={politicasTooltip}
            comportamientoTooltip="siempre"
            leyendaError={"Contraseña inválida"}
            mostrarLeyenda={mostrarContraLeyenda}
            cambiarMostrarLeyenda={cambiarMostrarContraLeyenda}
          />
          <ComponenteOtro 
            estado={contraseña2}
            cambiarEstado={cambiarContraseña2}
            tipo="password" 
            label="Confirmar contraseña" 
            placeholder="Confirmar contraseña"
            name="confirmarContraseña" 
            funcion={validarContraseña2}
            textoTooltip="Las contraseñas no coinciden"
          />
          <DivTextoCampoObligatorio>
            <p>Todos los campos son obligatorios</p>
            <DivBotonesSC>
              <BotonSubmit label="Guardar cambios" />
              <CancelarModal 
                titulo="¿Está seguro que desea cancelar la modificación?"
                texto="No podrá deshacer esta acción"
                icono="question"
                mostrarCancelar={true}
                confirmarTexto="Confirmar"
                cancelarTexto="Regresar"
                labelBoton="Cancelar"
                onConfirm={handleClose}
              />
            </DivBotonesSC>
          </DivTextoCampoObligatorio>
        </Formulario>
      </Box>
    </Modal>
  );
};

export const ManejoModificar = (bedel) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Button 
        onClick={handleOpen}
        color="info"
        style={{ marginRight: '-15px' }}>
       <EditIcon />
    </Button>
      {/* <button onClick={handleOpen}>Modificar</button> */}
      <ModificarModal open={open} handleClose={handleClose} bedel={bedel} />
    </>
  );
};
