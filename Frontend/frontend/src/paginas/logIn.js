import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ComponenteOtro} from "../componentes/input"
import {FormLogin, BotonSC} from "../elementos/formularios"
import { getUsuario } from '../services/api';

const App = () => {
    const [idUsuario, cambiarIdUsuario] = useState({campo:'', valido: null});
    const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
    const [mostrarContraLeyenda, cambiarMostrarContraLeyenda] = useState(false);
    const navigate = useNavigate();

    const datosLogin = {
        id_usuario: idUsuario.campo,
        contrasenia: contraseña1.campo
    }
    
    const onSubmit = async (e) => {
     e.preventDefault();
     const respuesta = await getUsuario(datosLogin);
     
     if (respuesta.rango === "acceso denegado") cambiarMostrarContraLeyenda(true);
     if (respuesta.rango === "bedel") navigate("/menuBedel");
     if (respuesta.rango === "admin") navigate("/menuAdm");
    }

    return (
      <main>
        <h1>Login</h1>
        <FormLogin onSubmit={onSubmit}>
            <ComponenteOtro 
            estado={idUsuario}
            cambiarEstado={cambiarIdUsuario}
            tipo="text" 
            label="ID usuario" 
            placeholder="ID de usuario"
            name="idUsuario" 
            cambiarMostrarLeyenda={cambiarMostrarContraLeyenda}
            />
            <ComponenteOtro 
            estado={contraseña1}
            cambiarEstado={cambiarContraseña1}
            tipo="password" 
            label="Contraseña" 
            placeholder="Ingrese su contraseña"
            name="contraseña" 
            leyendaError={"El ID usuario o la contraseña son incorrectos"}
            mostrarLeyenda={mostrarContraLeyenda}
            cambiarMostrarLeyenda={cambiarMostrarContraLeyenda}
            />
            <BotonSC>Acceder</BotonSC>
        </FormLogin>
    </main>
    );
}

export default App;
