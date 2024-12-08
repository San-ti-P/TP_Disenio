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
import {enviarAulas} from "../services/api"


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
          dia: "fecha.dia_semana si Dios quiere",
          duracion: "fecha.duracion si Dios quiere",
          hora_inicio: "fecha.hora_incio si Dios quiere",
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

  const enviarAulasSeleccionadas = async (datos) => {
    const respuestaReserva = await enviarAulas(datos);
  }

  const handleSubmit = () => {
    const fechasSinSeleccionar = fechas.some(fecha => !aulasSeleccionadas[fecha.fecha]);
    
    if (fechasSinSeleccionar) mostrarModalAulasSinSeleccionar(enviarAulasSeleccionadas, datosFormulario);
    else {
      enviarAulasSeleccionadas(datosFormulario); 
      mostrarModalAulasExitoso();
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
            width="450px"
          />
        </ContenedorBotones>
      </PanelDerecho>
    </Contenedor>
  );
}