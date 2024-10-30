import React, {useState} from "react";
import { Formulario, DivTextoCampoObligatorio, DivBotonesSC } from "../elementos/formularios.js";
import { ComponenteNyAP, ComponenteOtro, ComponenteDesplegableInput } from "../componentes/input.js"
import { SiguienteModal, CancelarModal} from "../componentes/modal.js"

const App = () => {

  const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [apellido, cambiarApellido] = useState({campo:'', valido: null}); 
  const [turno, cambiarTurno] = useState({campo:'', valido: null});
  const [idUsuario, cambiarIdUsuario] = useState({campo:'', valido: null});
  const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
  const [contraseña2, cambiarContraseña2] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null)
  const [animarErrores, cambiarAnimarErrores] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
    idUsuario: /^utn-\d{6}$/, // Formato: utn- seguido de exactamente 6 dígitos.
    contraseña: /^(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`]{6,64}$/
    // Mínimo 6 y máximo 64 caracteres, al menos un signo especial, una letra mayúscula y un dígito
  };

  const validarContraseña2 = () =>{
    if(contraseña1.campo.length > 0){
      if(contraseña1.campo !== contraseña2.campo){
        cambiarContraseña2((prevState) => {
          return {...prevState, valido: 'false'}
        })
      }
      else{
        cambiarContraseña2((prevState) => {
          return {...prevState, valido: 'true'}
        })
      } 
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    let hayErrores = false;

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
        cambiarNombre({ campo: '', valido: null });
        cambiarApellido({ campo: '', valido: null });
        cambiarTurno({ campo: '', valido: null });
        cambiarIdUsuario({ campo: '', valido: null });
        cambiarContraseña1({ campo: '', valido: null });
        cambiarContraseña2({ campo: '', valido: null });
    }
};

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
            textoTooltip={nombre.valido === 'false' ? "El nombre debe tener como mínimo 2 letras y no contener números ni caracteres especiales" : null}
        />
        <ComponenteNyAP
          estado = {apellido}
          cambiarEstado = {cambiarApellido}
          tipo = "text"
          label="Apellido"
          placeholder = "Ingrese su apellido"
          name = "apellido"
          expresionRegular = {expresiones.apellido}
          textoTooltip = {apellido.valido === 'false' ? "El apellido debe tener como mínimo 2 letras y no tener números" : null}
        />
        <ComponenteDesplegableInput 
          estado = {turno}
          cambiarEstado = {cambiarTurno}
          tipo = "text" 
          label = "Turno" 
          placeholder = "Seleccione un turno"
          name = "turno" 
        />

          <ComponenteOtro
          estado = {idUsuario}
          cambiarEstado = {cambiarIdUsuario}
          tipo = "text" 
          label= "ID usuario" 
          placeholder = "ID de usuario"
          name = "idUsuario" 
          expresionRegular = {expresiones.idUsuario}
          textoTooltip = {`El campo debe comenzar con las letras "utn-" seguidas de exactamente seis dígitos numéricos. \n Ejemplo: utn-123456`}
          comportamientoTooltip = "siempre"
          />

        <ComponenteOtro 
          estado={contraseña1}
          cambiarEstado={cambiarContraseña1}
          tipo = "password" 
          label="Contraseña" 
          placeholder="Ingrese su contraseña"
          name = "contraseña" 
          expresionRegular = {expresiones.contraseña}
          textoTooltip = {`La contraseña debe: \n -Tener una longitud mínima de 6 caracteres. \n -Contener al menos un signo especial. \n -Contener al menos una letra mayúscula.\n -Contener al menos un digito.\n -No ser igual a una contraseña utilizada anteriormente por el usuario.`}
          comportamientoTooltip = "siempre"
          />

        <ComponenteOtro 
          estado={contraseña2}
          cambiarEstado={cambiarContraseña2}
          tipo = "password" 
          label="Confirmar contraseña" 
          placeholder="Confirme la contraseña"
          name = "confiarmarContraseña" 
          expresionRegular = {expresiones.contraseña}
          funcion={validarContraseña2}
          />

      <DivTextoCampoObligatorio>
        <p>Todos los campos son obligatorios</p>
        <DivBotonesSC>
          <SiguienteModal
            titulo="Bedel registrado satisfactoriamente"
            texto=""
            icono="info"
            mostrarCancelar={false}
            confirmarTexto="Confirmar"
            labelBoton="Siguiente"
          />
          <CancelarModal 
            titulo="¿Está seguro que desea cancelar el registro?"
            texto="No podras deshacer esta accion"
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