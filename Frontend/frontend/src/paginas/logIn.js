import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ComponenteOtro} from "../componentes/input"
import {FormLogin, BotonSC} from "../elementos/formularios"

const App = () => {
    const [idUsuario, cambiarIdUsuario] = useState({campo:'', valido: null});
    const [mostrarIDLeyenda, cambiarMostrarIDLeyenda] = useState(false);
    const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
    const [mostrarContraLeyenda, cambiarMostrarContraLeyenda] = useState(false);
    const navigate = useNavigate();

    const expresiones = {
        //nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
        //apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos- min 2 letras
        idUsuario: /^utn-\d{6}$/, // Formato: utn- seguido de exactamente 6 dígitos.
        //contraseña: /^(?=.*[@#$%&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%&*]{8,50}$/ // Mínimo 8 y máximo 50 caracteres
      };

    const datosLogin = {
        id: idUsuario.campo,
        contrasenia: contraseña1.campo
    }
    
    const onSubmit = () => {
     let rutaAdm = "/menuAdm";
     let rutaBedel = "/menuBedel";   
     navigate(rutaAdm);
    //  si el backend devuelve que es Adm, voy a rutaAdm,
    //  si el backend devuelve que es Bedel, voy a rutaBedel
    
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
            leyendaError={"ID de usuario no existe"}
            mostrarLeyenda={mostrarIDLeyenda}
            cambiarMostrarLeyenda={cambiarMostrarIDLeyenda}
            expresionRegular = {expresiones.idUsuario}
            />
            <ComponenteOtro 
            estado={contraseña1}
            cambiarEstado={cambiarContraseña1}
            tipo="password" 
            label="Contraseña" 
            placeholder="Ingrese su contraseña"
            name="contraseña" 
            leyendaError={"Contraseña inválida"}
            mostrarLeyenda={mostrarContraLeyenda}
            cambiarMostrarLeyenda={cambiarMostrarContraLeyenda}
            />
            <BotonSC>Aceptar</BotonSC>
        </FormLogin>
    </main>
    );
}

export default App;
