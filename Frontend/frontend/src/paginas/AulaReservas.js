// import React, { useState, useEffect } from "react";
// import EstilosGlobal from "../estilos/estilosGlobal";
// import { useLocation, useNavigate } from 'react-router-dom';

// const App = () => {
//     const location = useLocation();
//     const [aulas, setAulas] = useState(location.state?.fechas || '');
//     console.log(aulas);
//     return (
//         <>
//             <EstilosGlobal/>
//             <h1>Reservas de Aulas</h1>
//         </>
//     );

// }

// export default App;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BotonSC } from "../elementos/formularios"
import { CancelarModal } from '../componentes/modal';
import {
  Contenedor,
  PanelIzquierdo,
  PanelDerecho,
  ListaAulas,
  BotonFecha,
  CajaAdvertencia,
  OpcionAula,
  ContenedorBotones,
  Boton
} from '../elementos/AulasReservasEstilos';

export default function AulasReservas() {
  const ubicacion = useLocation();
  const navegar = useNavigate();
  const [fechas, setFechas] = useState(ubicacion.state?.fechas || []);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [aulasSeleccionadas, setAulasSeleccionadas] = useState({});

  const manejarSeleccionFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  const manejarSeleccionAula = (fecha, aula) => {
    setAulasSeleccionadas(prev => ({
      ...prev,
      [fecha.fecha]: aula.aula.nro_aula
    }));
  };

  const manejarEnvio = () => {
    const fechasSinSeleccionar = fechas.some(fecha => !aulasSeleccionadas[fecha.fecha]);
    
    if (fechasSinSeleccionar) {
      console.log("Quedan aulas sin seleccionar, solo se guardan las reservadas");
    }

    const datosFormulario = {
      docente: ubicacion.state?.docente || {},
      cant_alumnos: ubicacion.state?.cant_alumnos || 0,
      tipo_aula: ubicacion.state?.tipo_aula || "",
      actividad: ubicacion.state?.actividad || {},
      periodo: ubicacion.state?.periodo || null,
      lista_reservaciones: fechas.map(fecha => ({
        dia: new Date(fecha.fecha + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long' }),
        fecha: fecha.fecha,
        duracion: ubicacion.state?.duracion || 0,
        hora_inicio: ubicacion.state?.hora_inicio || "",
        aula: aulasSeleccionadas[fecha.fecha] || null
      }))
    };

    console.log(JSON.stringify(datosFormulario, null, 2));
  };

  const manejarCancelar = () => {
    navegar('/registrar-reserva');
  };

  return (
    <Contenedor>
      <PanelIzquierdo>
        {fechas.map((fecha) => (
          <BotonFecha
            key={fecha.fecha}
            onClick={() => manejarSeleccionFecha(fecha)}
            className={fechaSeleccionada?.fecha === fecha.fecha ? 'seleccionado' : ''}
            noDisponible={fecha.aulas.some(a => a.reservacion !== null)}
            seleccionado={aulasSeleccionadas[fecha.fecha]}
          >
            <span className="fecha">
              {fecha.fecha ? new Date(fecha.fecha + 'T00:00:00').toLocaleDateString() : fecha.dia}
            </span>
            <span className="estado">
              {aulasSeleccionadas[fecha.fecha] ? 
                `${aulasSeleccionadas[fecha.fecha]}` : 
                fecha.aulas.some(a => a.reservacion !== null) ?
                  'No disponible (Consultar con Docente)' :
                  'Sin seleccionar'}
            </span>
          </BotonFecha>
        ))}
      </PanelIzquierdo>

      <PanelDerecho>
        <ListaAulas>
          {fechaSeleccionada && (
            <>
              {fechaSeleccionada.aulas.some(a => a.reservacion !== null) && (
                <CajaAdvertencia>
                  AULAS CON MENOR SOLAPAMIENTO
                </CajaAdvertencia>
              )}

              {fechaSeleccionada.aulas.map((aula, index) => (
                <OpcionAula 
                  key={index}
                  onClick={() => manejarSeleccionAula(fechaSeleccionada, aula)}
                >
                  <div className="encabezado">
                    <input
                      type="radio"
                      name={`aula-${fechaSeleccionada.fecha}`}
                      checked={aulasSeleccionadas[fechaSeleccionada.fecha] === aula.aula.nro_aula}
                      onChange={() => {}}
                    />
                    <strong>{aula.aula.nro_aula}</strong>
                  </div>
                  <div className="detalles">
                    <div>Ubicación: {aula.aula.piso}</div>
                    <div>Capacidad: {aula.aula.capacidad} personas</div>
                    <div>Características: {aula.aula.caracteristicas === "" ? " - " : aula.aula.caracteristicas}</div>
                    {aula.reservacion && aula.docente && (
                      <>
                        <div>Profesor: {aula.docente.nombre} {aula.docente.apellido}</div>
                        <div>Correo: {aula.docente.correo_contacto}</div>
                      </>
                    )}
                  </div>
                </OpcionAula>
              ))}
            </>
          )}
        </ListaAulas>

        <ContenedorBotones>
          <BotonSC 
            onClick={manejarEnvio}
          >
            Guardar
          </BotonSC>
          <CancelarModal
            titulo="¿Está seguro que desea cancelar la selección de aulas?"
            texto="Si tiene aulas seleccionadas, no se guardarán"
            icono="question"
            mostrarCancelar={true}
            confirmarTexto="Confirmar"
            cancelarTexto="Regresar"
            labelBoton="Cancelar"
            url="/registrar-reserva"
            width="380px"
          />
        </ContenedorBotones>
      </PanelDerecho>
    </Contenedor>
  );
}





