import React, { useState, useEffect } from 'react';
import { Formulario, DivTextoCampoObligatorio, DivBotonesSC } from "../elementos/formularios.js";
import { ComponenteNyAP, ComponenteOtro, ComponenteDesplegableInput } from "../componentes/input.js"
import { CancelarModal, mostrarModalExito } from "../componentes/modal.js"
import { enviarFormulario, getPoliticas } from "../services/api.js"
import { BotonSC, BotonSubmit, LeyendaError } from '../elementos/formularios.js';

const App = () => {

  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
  const [turno, cambiarTurno] = useState({ campo: '', valido: null });
  const [idUsuario, cambiarIdUsuario] = useState({ campo: '', valido: null });
  const [contraseña1, cambiarContraseña1] = useState({ campo: '', valido: null });
  const [contraseña2, cambiarContraseña2] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null)
  const [animarErrores, cambiarAnimarErrores] = useState(false);
  const [mostrarIDLeyenda, cambiarMostrarIDLeyenda] = useState(false);
  const [mostrarContraLeyenda, cambiarMostrarContraLeyenda] = useState(false);
  const [politicasTooltip, setPoliticasTooltip] = useState('');

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
    idUsuario: /^utn-\d{6}$/, // Formato: utn- seguido de exactamente 6 dígitos.
    //contraseña: /^(?=.*[@#$%&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%&*]{8,50}$/ // Mínimo 8 y máximo 50 caracteres
  };

  const validarContraseña2 = () => {
    if (contraseña1.campo.length > 0) {
      if (contraseña1.campo !== contraseña2.campo) {
        cambiarContraseña2((prevState) => {
          return { ...prevState, valido: 'false' }
        })
      }
      else {
        cambiarContraseña2((prevState) => {
          return { ...prevState, valido: 'true' }
        })
      }
    }
  }

  const resetFormulario = () => {
    cambiarNombre({ campo: '', valido: null });
    cambiarApellido({ campo: '', valido: null });
    cambiarTurno({ campo: '', valido: null });
    cambiarIdUsuario({ campo: '', valido: null });
    cambiarContraseña1({ campo: '', valido: null });
    cambiarContraseña2({ campo: '', valido: null });
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
    if (contraseña1.valido !== 'true') {
      cambiarContraseña1({ campo: contraseña1.campo, valido: 'false' });
      hayErrores = true;
    }
    if (contraseña2.valido !== 'true') {
      cambiarContraseña2({ campo: contraseña2.campo, valido: 'false' });
      hayErrores = true;
    }

    // Si hay errores, animar
    if (hayErrores) {
      setTimeout(() => cambiarAnimarErrores(false), 1000);
    } else {
      cambiarFormularioValido(true);
      const datosFormulario = {
        nombre: nombre.campo,
        apellido: apellido.campo,
        turno: turno.campo,
        id_usuario: idUsuario.campo,
        contrasenia: contraseña1.campo
      };

      console.log("Datos del bedel a Registrar: ", datosFormulario);
      const respuesta = await enviarFormulario(datosFormulario);
      console.log("Respuesta del backend al Registrar Bedel", respuesta);

      if (respuesta.error) {
        alert("Ocurrió un error al enviar el formulario");
      } else {
        const respuestaErrores = respuesta.data.errors;
        if (respuestaErrores.length === 0) {
          mostrarModalExito(resetFormulario);
        } else {
          if (respuestaErrores.includes("campos_invalidos")) {
            alert("Error de campo");
          }
          if (respuestaErrores.includes("contrasenia_invalida")) {
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

  const obtenerPoliticas = async () => {
    const politicas = await getPoliticas();
    if (politicas) setPoliticasTooltip(politicas);
    console.log("Politicas obtenidas desde el Backend: \n", politicas);
  };

  useEffect(() => {
    obtenerPoliticas();
  }, []);

  return (
    <main>
      <h1>Datos del bedel</h1>
      <Formulario action="" onSubmit={onSubmit}>

        <ComponenteNyAP
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="Ingrese su nombre"
          name="nombre"
          expresionRegular={expresiones.nombre}
          textoTooltip={nombre.valido === "false" ? "El nombre debe tener entre 2 y 40 letras inclusive, sólo caracteres alfabéticos" : null}
        />
        <ComponenteNyAP
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo="text"
          label="Apellido"
          placeholder="Ingrese su apellido"
          name="apellido"
          expresionRegular={expresiones.apellido}
          textoTooltip={apellido.valido === "false" ? "El apellido debe tener entre 2 y 40 letras inclusive, sólo caracteres alfabéticos" : null}
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
          placeholder="Confirme la contraseña"
          name="confirmarContraseña"
          funcion={validarContraseña2}
          textoTooltip="Las contraseñas no coinciden"
        />

        <DivTextoCampoObligatorio>
          <p>Todos los campos son obligatorios</p>
          <DivBotonesSC>
            <BotonSubmit label="Siguiente">Siguiente</BotonSubmit>
            <CancelarModal
              titulo="¿Está seguro que desea cancelar el registro?"
              texto="No podrá deshacer esta acción"
              icono="question"
              mostrarCancelar={true}
              confirmarTexto="Confirmar"
              cancelarTexto="Regresar"
              labelBoton="Cancelar"
            />
          </DivBotonesSC>
        </DivTextoCampoObligatorio>

      </Formulario>
    </main>
  );
}

export default App;