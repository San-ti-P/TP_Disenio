import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ComponenteOtro} from "../componentes/input"
import {DivLogin, BotonSC} from "../elementos/formularios"

const App = () => {
    const [idUsuario, cambiarIdUsuario] = useState({campo:'', valido: null});
    const [mostrarIDLeyenda, cambiarMostrarIDLeyenda] = useState(false);
    const [contraseña1, cambiarContraseña1] = useState({campo:'', valido: null});
    const [mostrarContraLeyenda, cambiarMostrarContraLeyenda] = useState(false);

    const navigate = useNavigate();

    return (
      <main>
        <h1>Login</h1>
        <DivLogin>
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
            <BotonSC onClick={() => navigate('/menu')}>Aceptar</BotonSC>
        </DivLogin>
    </main>
    );
}

export default App;
