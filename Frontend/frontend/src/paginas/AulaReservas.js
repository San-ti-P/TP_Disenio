// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { BotonSC } from "../elementos/formularios"
// import { CancelarModal } from '../componentes/modal';
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

// export default function AulasReservas() {
//   const locate = useLocation();
//   const navigate = useNavigate();
//   const [fechas, setFechas] = useState(locate.state?.fechas || []);
//   const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
//   const [aulasSeleccionadas, setAulasSeleccionadas] = useState({});

//   const manejarSeleccionFecha = (fecha) => {
//     setFechaSeleccionada(fecha);
//   };

//   const manejarSeleccionAula = (fecha, aula) => {
//     setAulasSeleccionadas(prev => ({
//       ...prev,
//       [fecha.fecha]: aula.aula.nro_aula
//     }));
//   };

//   const handleSubmit = () => {
//     const fechasSinSeleccionar = fechas.some(fecha => !aulasSeleccionadas[fecha.fecha]);
    
//     if (fechasSinSeleccionar) {
//       console.log("Quedan aulas sin seleccionar, solo se guardan las reservadas");
//     }

//     const datosFormulario = {
//         docente: locate.state?.docente || {},
//         cant_alumnos: locate.state?.cant_alumnos || 0,
//         tipo_aula: locate.state?.tipo_aula || "",
//         actividad: locate.state?.actividad || {},
//         periodo: locate.state?.periodo || null,
//         lista_reservaciones: (locate.state?.fechas || []).map(fecha => ({
//           dia: new Date(fecha.fecha + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long' }),
//           fecha: fecha.fecha,
//           duracion: fecha.duracion || 0,
//           hora_inicio: fecha.hora_inicio || "",
//           aula: aulasSeleccionadas[fecha.fecha] || null
//         }))
//       };

//     console.log(JSON.stringify(datosFormulario, null, 2));
//   };

//   return (
//     <Contenedor>
//       <PanelIzquierdo>
//         {fechas.map((fecha) => (
//           <BotonFecha
//             key={fecha.fecha}
//             onClick={() => manejarSeleccionFecha(fecha)}
//             className={fechaSeleccionada?.fecha === fecha.fecha ? 'seleccionado' : ''}
//             noDisponible={fecha.aulas.some(a => a.reservacion !== null)}
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
//                   onClick={() => manejarSeleccionAula(fechaSeleccionada, aula)}
//                 >
//                   <div className="encabezado">
//                     <input
//                       type="radio"
//                       name={`aula-${fechaSeleccionada.fecha}`}
//                       checked={aulasSeleccionadas[fechaSeleccionada.fecha] === aula.aula.nro_aula}
//                       onChange={() => {}}
//                     />
//                     <strong>{aula.aula.nro_aula}</strong>
//                   </div>
//                   <div className="detalles">
//                     <div>Ubicación: {aula.aula.piso}</div>
//                     <div>Capacidad: {aula.aula.capacidad} personas</div>
//                     <div>Características: {aula.aula.caracteristicas === "" ? " - " : aula.aula.caracteristicas}</div>
//                     {aula.reservacion && aula.docente && (
//                       <>
//                         <div>Profesor: {aula.docente.nombre} {aula.docente.apellido}</div>
//                         <div>Correo: {aula.docente.correo_contacto}</div>
//                       </>
//                     )}
//                   </div>
//                 </OpcionAula>
//               ))}
//             </>
//           )}
//         </ListaAulas>

//         <ContenedorBotones>
//           <BotonSC 
//             onClick={handleSubmit}
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
//             width="380px"
//           />
//         </ContenedorBotones>
//       </PanelDerecho>
//     </Contenedor>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BotonSC } from "../elementos/formularios";
import { CancelarModal } from '../componentes/modal';
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

const formatearDia = (dia) => {
  const sinTildes = dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return sinTildes.charAt(0).toUpperCase() + sinTildes.slice(1);
};

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
          dia: formatearDia(new Date(fecha.fecha + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long' })),
          fecha: fecha.fecha,
          duracion: locate.state.formData.lista_reservaciones[index]?.duracion || 0,
          hora_inicio: locate.state.formData.lista_reservaciones[index]?.hora_inicio || "",
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

  const handleSubmit = () => {
    const fechasSinSeleccionar = fechas.some(fecha => !aulasSeleccionadas[fecha.fecha]);
    
    if (fechasSinSeleccionar) {
      console.log("Quedan aulas sin seleccionar, solo se guardan las reservadas");
    }

    const updatedDatosFormulario = {
      ...datosFormulario,
      lista_reservaciones: fechas.map((fecha, index) => ({
        dia: formatearDia(new Date(fecha.fecha + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long' })),
        fecha: fecha.fecha,
        duracion: locate.state.formData.lista_reservaciones[index]?.duracion || 0,
        hora_inicio: locate.state.formData.lista_reservaciones[index]?.hora_inicio || "",
        aula: aulasSeleccionadas[fecha.fecha] || null
      }))
    };

    setDatosFormulario(updatedDatosFormulario);
    console.log(JSON.stringify(updatedDatosFormulario, null, 2));
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
            onClick={handleSubmit}
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