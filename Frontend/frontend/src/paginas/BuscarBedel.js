import { React, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Formulario, DivBotonesSC } from "../elementos/formularios.js";
import { ComponenteNyAP, ComponenteDesplegableInput } from "../componentes/input.js"
import { BotonSubmit } from '../elementos/formularios.js'; 
import { CancelarModal } from "../componentes/modal.js"

const valores = [
    { "nombre": "Carlos", "apellido": "Lopez", "turno": "Noche", "identificador": "utn-11223344" },
    { "nombre": "Ana", "apellido": "Martinez", "turno": "Mañana", "identificador": "44556" },
    { "nombre": "Luis", "apellido": "Garcia", "turno": "Tarde", "identificador": "77889" },
    { "nombre": "Elena", "apellido": "Rodriguez", "turno": "Noche", "identificador": "99001" },
    { "nombre": "Pedro", "apellido": "Fernandez", "turno": "Mañana", "identificador": "22334" },
    { "nombre": "Laura", "apellido": "Gonzalez", "turno": "Tarde", "identificador": "55667" },
    { "nombre": "Jorge", "apellido": "Hernandez", "turno": "Noche", "identificador": "88990" },
    { "nombre": "Marta", "apellido": "Ruiz", "turno": "Mañana", "identificador": "33445" },
    { "nombre": "Sofia", "apellido": "Diaz", "turno": "Tarde", "identificador": "66778" },
    { "nombre": "Miguel", "apellido": "Morales", "turno": "Noche", "identificador": "99012" },
    { "nombre": "Lucia", "apellido": "Ortega", "turno": "Mañana", "identificador": "22345" },
    { "nombre": "Raul", "apellido": "Sanchez", "turno": "Tarde", "identificador": "55678" },
    { "nombre": "Carmen", "apellido": "Ramirez", "turno": "Noche", "identificador": "88901" },
    { "nombre": "Jose", "apellido": "Torres", "turno": "Mañana", "identificador": "33456" },
    { "nombre": "Patricia", "apellido": "Flores", "turno": "Tarde", "identificador": "66789" }
];

const App = () => {
    const [apellido, setApellido] = useState({campo:'', valido: null});
    const [turno, setTurno] = useState({campo:'', valido: null});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/modificar-eliminar-bedel', { state: { valores } });
    }


    return (
        <main style={{ width: "100%", paddingRight: 35 }}>
            <h1>Buscar Bedel</h1>
            <Formulario onSubmit={handleSubmit}> 
                <ComponenteNyAP
                estado = {apellido}
                cambiarEstado = {setApellido}
                tipo = "text"
                label="Apellido"
                placeholder = "Todos"
                name = "apellido"
                />
                <ComponenteDesplegableInput 
                estado = {turno}
                cambiarEstado = {setTurno}
                tipo = "text" 
                label = "Turno" 
                placeholder = "Todos"
                name = "turno" 
                valorPorDefecto = "Todos"
                valores = {["Mañana", "Tarde", "Noche"]}
                />
                <DivBotonesSC>
                    <BotonSubmit label="Buscar">Buscar</BotonSubmit>
                    <CancelarModal 
                        titulo="¿Está seguro que desea cancelar la busqueda?"
                        texto="No podrá deshacer esta acción"
                        icono="question"
                        mostrarCancelar={true}
                        confirmarTexto="Confirmar"
                        cancelarTexto="Regresar"
                        labelBoton="Cancelar"
                    />
                </DivBotonesSC>
            </Formulario>
        </main>
    );
}

export default App;
