import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { Formulario, DivBotonesSC } from "../elementos/formularios.js";
import { ComponenteNyAP, ComponenteDesplegableInput } from "../componentes/input.js"
import { BotonSubmit } from '../elementos/formularios.js';
import { CancelarModal } from "../componentes/modal.js"
import { getResultadosBusqueda } from "../services/api.js";
import { getPoliticas } from "../services/api.js";

const App = () => {
    const [apellido, setApellido] = useState({ campo: '', valido: null });
    const [turno, setTurno] = useState({ campo: '', valido: null });
    const navigate = useNavigate();
    const [politicasTooltip, setPoliticasTooltip] = useState('');

    const obtenerPoliticas = async () => {
        const politicas = await getPoliticas();
        console.log("Las politicas obtenidas son: \n" + politicas);
        if (politicas) setPoliticasTooltip(politicas);
    };

    useEffect(() => {
        obtenerPoliticas();
    }, []);

    const fetchValores = async () => {
        console.log("Criterios de busqueda: ", apellido.campo, turno.campo);
        return await getResultadosBusqueda(apellido.campo, turno.campo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const valores = await fetchValores();
        navigate('/modificar-eliminar-bedel', { state: { valores, apellido: apellido.campo, turno: turno.campo, politicas: politicasTooltip } });
    };

    return (
        <main style={{ width: "100%", paddingRight: 35 }}>
            <h2>Buscar Bedel</h2>
            <Formulario onSubmit={handleSubmit}>
                <ComponenteNyAP
                    estado={apellido}
                    cambiarEstado={setApellido}
                    tipo="text"
                    label="Apellido"
                    placeholder="Todos"
                    name="apellido"
                />
                <ComponenteDesplegableInput
                    estado={turno}
                    cambiarEstado={setTurno}
                    tipo="text"
                    label="Turno"
                    placeholder="Todos"
                    name="turno"
                    valorPorDefecto="Todos"
                    valores={["Mañana", "Tarde", "Noche"]}
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