// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { BotonSC } from "../elementos/formularios";
// import { CancelarModal, mostrarModalAulasSinSeleccionar, mostrarModalAulasExitoso } from '../componentes/modal';
// import {
//   Contenedor,
//   PanelIzquierdo,
//   PanelDerecho,
//   ListaAulas,
//   BotonFecha,
//   CajaAdvertencia,
//   OpcionAula,
//   ContenedorBotones
// } from '../elementos/AulasReservasEstilos';
// import { enviarAulas } from "../services/api"

// function calcularHoraFinal(horaInicio, duracion) {
//   const [horas, minutos] = horaInicio.split(":").map(Number);
//   const totalMinutos = horas * 60 + minutos + duracion;
//   const horaFinal = `${String(Math.floor(totalMinutos / 60)).padStart(2, '0')}:${String(totalMinutos % 60).padStart(2, '0')}`;
//   return horaFinal;
// }

// export default function AulasReservas() {
//   const locate = useLocation();
//   const navigate = useNavigate();
//   const [fechas, setFechas] = useState(locate.state?.fechas || []);
//   const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
//   const [aulasSeleccionadas, setAulasSeleccionadas] = useState({});
//   const [datosFormulario, setDatosFormulario] = useState({
//     docente: {},
//     cant_alumnos: 0,
//     tipo_aula: "",
//     actividad: {},
//     periodo: null,
//     lista_reservaciones: []
//   });

//   useEffect(() => {
//     if (locate.state) {
//       const updatedDatosFormulario = {
//         docente: locate.state.formData.docente || {},
//         cant_alumnos: locate.state.formData.cant_alumnos || 0,
//         tipo_aula: locate.state.formData.tipo_aula || "",
//         actividad: locate.state.formData.actividad || {},
//         periodo: locate.state.formData.periodo || null,
//         lista_reservaciones: (locate.state.fechas || []).map((fecha, index) => ({
//           fecha: fecha.fecha,
//           dia: fecha.dia,
//           duracion: fecha.duracion,
//           hora_inicio: fecha.hora_inicio.slice(0, 5),
//           aula: aulasSeleccionadas[fecha.fecha] || null
//         }))
//       };
//       setDatosFormulario(updatedDatosFormulario);
//     }
//   }, [locate.state, aulasSeleccionadas]);

//   const manejarSeleccionFecha = (fecha) => {
//     setFechaSeleccionada(fecha);
//   };

//   const manejarSeleccionAula = (fecha, aula) => {
//     setAulasSeleccionadas(prev => ({
//       ...prev,
//       [fecha.fecha]: aula.aula.nro_aula
//     }));
//   };

//   const alMenosUnAulaSeleccionada = () => {
//     return Object.values(aulasSeleccionadas).some(aula => aula !== null);
//   };

//   const enviarAulasSeleccionadas = async (datos) => {
//     const respuestaReserva = await enviarAulas(datos);
//     console.log("Respuesta del backend: ", JSON.stringify(respuestaReserva, null, 2))
//   }

//   const handleSubmit = () => {
//     console.log("JSON enviado al backend: ", JSON.stringify(datosFormulario, null, 2));

//     if (!alMenosUnAulaSeleccionada()) {
//       mostrarModalAulasSinSeleccionar(navigate, enviarAulasSeleccionadas, datosFormulario);
//     } else {
//       enviarAulasSeleccionadas(datosFormulario);
//       mostrarModalAulasExitoso(navigate);
//     }
//   };

//   return (
//     <Contenedor>
//       <PanelIzquierdo>
//         {fechas.map((fecha) => (
//           <BotonFecha
//             key={fecha.fecha}
//             onClick={() => manejarSeleccionFecha(fecha)}
//             className={fechaSeleccionada?.fecha === fecha.fecha ? 'seleccionado' : ''}
//             nodisponible={fecha.aulas.some(a => a.reservacion !== null) ? 'true' : undefined}
//             seleccionado={aulasSeleccionadas[fecha.fecha]}
//           >
//             <span className="fecha">
//               {fecha.fecha ? new Date(fecha.fecha + 'T00:00:00').toLocaleDateString() : fecha.dia}
//             </span>
//             <span className="estado">
//               {aulasSeleccionadas[fecha.fecha] ?
//                 `${aulasSeleccionadas[fecha.fecha]}` :
//                 fecha.aulas.some(a => a.reservacion !== null) ?
//                   'No disponible (Consultar con Docente)' :
//                   'Sin seleccionar'}
//             </span>
//           </BotonFecha>
//         ))}
//       </PanelIzquierdo>

//       <PanelDerecho>
//         <ListaAulas>
//           {fechaSeleccionada && (
//             <>
//               {fechaSeleccionada.aulas.some(a => a.reservacion !== null) && (
//                 <CajaAdvertencia>
//                   AULAS CON MENOR SOLAPAMIENTO
//                 </CajaAdvertencia>
//               )}

//               {fechaSeleccionada.aulas.map((aula, index) => (
//                 <OpcionAula
//                   key={index}
//                   onClick={() => !aula.reservacion && !aula.docente && manejarSeleccionAula(fechaSeleccionada, aula)}
//                   style={{ cursor: aula.reservacion && aula.docente ? 'default' : 'pointer' }}
//                 >

//                   {!aula.reservacion && !aula.docente && (
//                     <>
//                       <div className="encabezado">
//                         <input
//                           type="radio"
//                           name={`aula-${fechaSeleccionada.fecha}`}
//                           checked={aulasSeleccionadas[fechaSeleccionada.fecha] === aula.aula.nro_aula}
//                           onChange={() => manejarSeleccionAula(fechaSeleccionada, aula)}
//                         />
//                         <strong>{aula.aula.nro_aula}</strong>
//                       </div>
//                       <div className="detalles">
//                         <div>Ubicación: {aula.aula.piso}</div>
//                         <div>Capacidad: {aula.aula.capacidad} personas</div>
//                         <div>Características: {aula.aula.caracteristicas === "" ? " - " : aula.aula.caracteristicas}</div>
//                       </div>
//                     </>
//                   )}
//                   {aula.reservacion && aula.docente && (
//                     <>
//                       <div className="encabezado">
//                         <label name={`aula-${fechaSeleccionada.fecha}`} />
//                         <strong>{aula.aula.nro_aula}</strong>
//                       </div>
//                       <div className="detalles">
//                         <div>Profesor: {aula.docente.nombre} {aula.docente.apellido}</div>
//                         <div>Actividad: {aula.actividad} </div>
//                         <div>Correo de contacto: {aula.docente.correo_contacto}</div>
//                         <div>Horario: {aula.reservacion.hora_inicio.slice(0, 5)}hs a {calcularHoraFinal(aula.reservacion.hora_inicio.slice(0, 5), aula.reservacion.duracion)}hs</div>
//                       </div>
//                     </>
//                   )}
//                 </OpcionAula>
//               ))
//               }
//             </>
//           )}
//         </ListaAulas>

//         <ContenedorBotones>
//           <BotonSC
//             onClick={handleSubmit}
//             disabled={!alMenosUnAulaSeleccionada()}
//             style={{
//               backgroundColor: alMenosUnAulaSeleccionada() ? '#0075FF' : 'lightgrey',
//               cursor: alMenosUnAulaSeleccionada() ? 'pointer' : 'not-allowed'
//             }}
//           >
//             Guardar
//           </BotonSC>
//           <CancelarModal
//             titulo="¿Está seguro que desea cancelar la selección de aulas?"
//             texto="Si tiene aulas seleccionadas, no se guardarán"
//             icono="question"
//             mostrarCancelar={true}
//             confirmarTexto="Confirmar"
//             cancelarTexto="Regresar"
//             labelBoton="Cancelar"
//             url="/registrar-reserva"
//             width="450px"
//           />
//         </ContenedorBotones>
//       </PanelDerecho>
//     </Contenedor>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BotonSC } from "../elementos/formularios";
import { CancelarModal, mostrarModalAulasSinSeleccionar, mostrarModalAulasExitoso } from '../componentes/modal';
import {
  Contenedor,
  PanelIzquierdo,
  PanelDerecho,
  ListaAulas,
  BotonFecha,
  CajaAdvertencia,
  OpcionAula,
  ContenedorBotones
} from '../elementos/AulasReservasEstilos';
import { enviarAulas } from "../services/api"

function calcularHoraFinal(horaInicio, duracion) {
  const [horas, minutos] = horaInicio.split(":").map(Number);
  const totalMinutos = horas * 60 + minutos + duracion;
  const horaFinal = `${String(Math.floor(totalMinutos / 60)).padStart(2, '0')}:${String(totalMinutos % 60).padStart(2, '0')}`;
  return horaFinal;
}

export default function AulasReservas() {
  const locate = useLocation();
  const navigate = useNavigate();
  const [fechas, setFechas] = useState(locate.state?.fechas || []);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [aulasSeleccionadas, setAulasSeleccionadas] = useState({});
  const [datosFormulario, setDatosFormulario] = useState({
    docente: {},
    cant_alumnos: 0,
    tipo_aula: "",
    actividad: {},
    periodo: null,
    lista_reservaciones: []
  });

  useEffect(() => {
    if (locate.state) {
      const updatedDatosFormulario = {
        docente: locate.state.formData.docente || {},
        cant_alumnos: locate.state.formData.cant_alumnos || 0,
        tipo_aula: locate.state.formData.tipo_aula || "",
        actividad: locate.state.formData.actividad || {},
        periodo: locate.state.formData.periodo || null,
        lista_reservaciones: (locate.state.fechas || []).map((fecha, index) => ({
          fecha: fecha.fecha,
          dia: fecha.dia,
          duracion: fecha.duracion,
          hora_inicio: fecha.hora_inicio.slice(0, 5),
          aula: aulasSeleccionadas[fecha.fecha] || null
        }))
      };
      setDatosFormulario(updatedDatosFormulario);
    }
  }, [locate.state, aulasSeleccionadas]);

  const manejarSeleccionFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  const manejarSeleccionAula = (fecha, aula) => {
    setAulasSeleccionadas(prev => ({
      ...prev,
      [fecha.fecha]: aula.aula.nro_aula
    }));
  };

  const manejarDeseleccionAula = (fecha) => {
    setAulasSeleccionadas(prev => {
      const newState = { ...prev };
      delete newState[fecha.fecha];
      return newState;
    });
  };

  const alMenosUnAulaSeleccionada = () => {
    return Object.values(aulasSeleccionadas).some(aula => aula !== null);
  };

  const enviarAulasSeleccionadas = async (datos) => {
    const respuestaReserva = await enviarAulas(datos);
    console.log("Respuesta del backend: ", JSON.stringify(respuestaReserva, null, 2))
  }

  const handleSubmit = () => {
    console.log("JSON enviado al backend: ", JSON.stringify(datosFormulario, null, 2));

    if (!alMenosUnAulaSeleccionada()) {
      mostrarModalAulasSinSeleccionar(navigate, enviarAulasSeleccionadas, datosFormulario);
    } else {
      enviarAulasSeleccionadas(datosFormulario);
      mostrarModalAulasExitoso(navigate);
    }
  };

  return (
    <Contenedor>
      <PanelIzquierdo>
        {fechas.map((fecha) => (
          <BotonFecha
            key={fecha.fecha}
            onClick={() => manejarSeleccionFecha(fecha)}
            className={fechaSeleccionada?.fecha === fecha.fecha ? 'seleccionado' : ''}
            nodisponible={fecha.aulas.some(a => a.reservacion !== null) ? 'true' : undefined}
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
                  onClick={() => !aula.reservacion && !aula.docente && manejarSeleccionAula(fechaSeleccionada, aula)}
                  style={{ cursor: aula.reservacion && aula.docente ? 'default' : 'pointer' }}
                >

                  {!aula.reservacion && !aula.docente && (
                    <>
                      <div className="encabezado">
                        <input
                          type="radio"
                          name={`aula-${fechaSeleccionada.fecha}`}
                          checked={aulasSeleccionadas[fechaSeleccionada.fecha] === aula.aula.nro_aula}
                          onChange={() => manejarSeleccionAula(fechaSeleccionada, aula)}
                        />
                        <strong>{aula.aula.nro_aula}</strong>
                      </div>
                      <div className="detalles">
                        <div>Ubicación: {aula.aula.piso}</div>
                        <div>Capacidad: {aula.aula.capacidad} personas</div>
                        <div>Características: {aula.aula.caracteristicas === "" ? " - " : aula.aula.caracteristicas}</div>
                      </div>
                    </>
                  )}
                  {aula.reservacion && aula.docente && (
                    <>
                      <div className="encabezado">
                        <label name={`aula-${fechaSeleccionada.fecha}`} />
                        <strong>{aula.aula.nro_aula}</strong>
                      </div>
                      <div className="detalles">
                        <div>Profesor: {aula.docente.nombre} {aula.docente.apellido}</div>
                        <div>Actividad: {aula.actividad} </div>
                        <div>Correo de contacto: {aula.docente.correo_contacto}</div>
                        <div>Horario: {aula.reservacion.hora_inicio.slice(0, 5)}hs a {calcularHoraFinal(aula.reservacion.hora_inicio.slice(0, 5), aula.reservacion.duracion)}hs</div>
                      </div>
                    </>
                  )}
                </OpcionAula>
              ))
              }
            </>
          )}
        </ListaAulas>

        {/* New deselection button */}
        {fechaSeleccionada && aulasSeleccionadas[fechaSeleccionada.fecha] && (
          <BotonSC
            onClick={() => manejarDeseleccionAula(fechaSeleccionada)}
            style={{
              backgroundColor: '#FF0000',
              marginBottom: '10px'
            }}
          >
            Deseleccionar Aula
          </BotonSC>
        )}

        <ContenedorBotones>
          <BotonSC
            onClick={handleSubmit}
            disabled={!alMenosUnAulaSeleccionada()}
            style={{
              backgroundColor: alMenosUnAulaSeleccionada() ? '#0075FF' : 'lightgrey',
              cursor: alMenosUnAulaSeleccionada() ? 'pointer' : 'not-allowed'
            }}
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
            width="450px"
          />
        </ContenedorBotones>
      </PanelDerecho>
    </Contenedor>
  );
}