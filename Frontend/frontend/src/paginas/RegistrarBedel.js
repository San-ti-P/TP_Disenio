import React, {useState} from "react";
import { Formulario, DivTextoCampoObligatorio, DivBotonesSC, BotonSC} from "../elementos/formularios.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { ComponenteInput, ComponenteDesplegableInput } from "../componentes/input.js"

const App = () => {

  const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [apellido, cambiarApellido] = useState({campo:'', valido: null});
  //const [turno, cambiarTurno] = useState({campo:'', valido: null});
  const [idUsuario, cambiarIdUsuario] = useState({campo:'', valido: null});
  const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
  const [contraseña2, cambiarContraseña2] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null)
  const [animarErrores, cambiarAnimarErrores] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos- min 4 letras
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos- min 4 letras
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
        // Aquí puedes proceder con el envío del formulario
        // Restablecer los campos si es necesario
        cambiarNombre({ campo: '', valido: null });
        cambiarApellido({ campo: '', valido: null });
        cambiarIdUsuario({ campo: '', valido: null });
        cambiarContraseña1({ campo: '', valido: null });
        cambiarContraseña2({ campo: '', valido: null });
    }
};




  return (
    <main>
      <h1>Datos del bedel</h1>
      <Formulario action="" onSubmit={onSubmit}>
      
        <ComponenteInput 
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo = "text" 
          label="Nombre" 
          placeholder="Ingrese su nombre"
          name = "nombre" 
          leyendaError = "Descripcion cond de nombre" 
          expresionRegular = {expresiones.nombre}>
        </ComponenteInput>
        
        <ComponenteInput 
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo = "text" 
          label="Apellido" 
          placeholder="Ingrese su apellido"
          name = "apellido" 
          leyendaError = "Descripcion cond de apellido"
          expresionRegular = {expresiones.apellido}>
        </ComponenteInput>
          
        <ComponenteDesplegableInput 
          tipo = "text" 
          label="Turno" 
          placeholder="Seleccione un turno"
          name = "turno" 
          leyendaError = "Descripcion cond de lista" 
        >
        </ComponenteDesplegableInput>

        <ComponenteInput
          estado={idUsuario}
          cambiarEstado={cambiarIdUsuario}
          tipo = "text" 
          label="ID usuario" 
          placeholder="ID de usuario"
          name = "idUsuario" 
          leyendaError = "Descripcion cond de idUsuario" 
          expresionRegular = {expresiones.idUsuario}>
        </ComponenteInput>

        <ComponenteInput 
          estado={contraseña1}
          cambiarEstado={cambiarContraseña1}
          tipo = "password" 
          label="Contraseña" 
          placeholder="Ingrese su contraseña"
          name = "contraseña" 
          leyendaError = "Descripcion cond de contraseña" 
          expresionRegular = {expresiones.contraseña}>
        </ComponenteInput>

        <ComponenteInput 
          estado={contraseña2}
          cambiarEstado={cambiarContraseña2}
          tipo = "password" 
          label="Confirmar contraseña" 
          placeholder="Confirme la contraseña"
          name = "confiarmarContraseña" 
          leyendaError = "Descripcion cond de confirmar contraseña" 
          //expresionRegular = {expresiones.contraseña}
          funcion={validarContraseña2}>
        </ComponenteInput>

        <DivTextoCampoObligatorio>
        <p>Todos los campos son obligatorios</p>
        <DivBotonesSC>  
          <BotonSC type="submit">Siguiente</BotonSC>
          <BotonSC type="submit">Cancelar</BotonSC> 
        </DivBotonesSC>
      </DivTextoCampoObligatorio>

      </Formulario>
      
    </main>
  );
}

export default App;