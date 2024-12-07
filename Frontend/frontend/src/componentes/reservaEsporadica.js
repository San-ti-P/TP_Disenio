import React, { useState, useRef } from 'react';
import CalendarioPersonalizado from '../componentes/calendarioEsporadico';
import ModalHorarioEsporadico from '../componentes/horarioModalEsporadica';
import FocusLock from 'react-focus-lock';
import { 
  BotonEliminarReserva, 
  ContenedorReservas, 
  ContenedorCalendario, 
  BotonVerReservas, 
  FondoModal, 
  ContenidoModal, 
  EncabezadoModal, 
  TituloModal, 
  BotonCerrarModal, 
  ListaReservas, 
  ItemReserva 
} from "../elementos/esporadicoEl";

const diasMap = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado'
};

const ReservasEsporadicas = ({ onReservasChange }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mostrarModalHorario, setMostrarModalHorario] = useState(false);
  const [reservas, setReservas] = useState({});
  const [mostrarModalReservas, setMostrarModalReservas] = useState(false);
  const previousFocusRef = useRef(null);

  const manejarClickFecha = (fecha) => {
    setFechaSeleccionada(fecha);
    setMostrarModalHorario(true);
  };

  const manejarAceptarHorario = (hora_inicio, duracion) => {
    const fechaString = fechaSeleccionada.toISOString().split('T')[0];
    const dia = diasMap[fechaSeleccionada.getDay()];
    const nuevasReservas = {
      ...reservas,
      [fechaString]: { dia, fecha: fechaString, duracion, hora_inicio}
    };
    setReservas(nuevasReservas);
    setMostrarModalHorario(false);
    onReservasChange(Object.entries(nuevasReservas).map(([fecha, datos]) => ({ ...datos })), null);
  };

  const manejarCancelarHorario = () => {
    setMostrarModalHorario(false);
  };

  const manejarEliminarReserva = (fechaString) => {
    const nuevasReservas = { ...reservas };
    delete nuevasReservas[fechaString];
    setReservas(nuevasReservas);
    onReservasChange(Object.entries(nuevasReservas).map(([fecha, datos]) => ({ ...datos })), null);
  };

  const obtenerClaseFecha = ({ date }) => {
    const fechaString = date.toISOString().split('T')[0];
    return reservas[fechaString] ? 'reservada' : null;
  };

  const handleOpenModalReservas = () => {
    previousFocusRef.current = document.activeElement;
    setMostrarModalReservas(true);
  };

  const handleCloseModalReservas = () => {
    setMostrarModalReservas(false);
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  return (
    <ContenedorReservas>
      <ContenedorCalendario>
        <CalendarioPersonalizado
          onClickDay={manejarClickFecha}
          tileClassName={obtenerClaseFecha}
          value={null}
        />
      </ContenedorCalendario>
      <BotonVerReservas onClick={handleOpenModalReservas}>
        Ver Reservas
      </BotonVerReservas>
      {mostrarModalHorario && fechaSeleccionada && (
        <ModalHorarioEsporadico
          fecha={fechaSeleccionada.toLocaleDateString('es-ES')}
          onAceptar={manejarAceptarHorario}
          onCancelar={manejarCancelarHorario}
        />
      )}
      {mostrarModalReservas && (
        <FondoModal>
          <FocusLock>
            <ContenidoModal>
              <EncabezadoModal>
                <TituloModal>Reservas</TituloModal>
                <BotonCerrarModal onClick={handleCloseModalReservas}>&times;</BotonCerrarModal>
              </EncabezadoModal>
              <ListaReservas>
                {Object.entries(reservas).map(([fecha, { dia, duracion, hora_inicio }]) => (
                  <ItemReserva key={fecha}>
                    {fecha} ({dia}): {hora_inicio} hs - {duracion} minutos
                    <BotonEliminarReserva onClick={() => manejarEliminarReserva(fecha)}>
                      Eliminar
                    </BotonEliminarReserva>
                  </ItemReserva>
                ))}
              </ListaReservas>
            </ContenidoModal>
          </FocusLock>
        </FondoModal>
      )}
    </ContenedorReservas>
  );
};

export default ReservasEsporadicas;