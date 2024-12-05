import React, { useState } from 'react';
import CalendarioPersonalizado from '../componentes/calendarioEsporadico';
import ModalHorarioEsporadico from '../componentes/horarioModalEsporadica';
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
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
};

const ReservasEsporadicas = ({ onReservasChange }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mostrarModalHorario, setMostrarModalHorario] = useState(false);
  const [reservas, setReservas] = useState({});
  const [mostrarModalReservas, setMostrarModalReservas] = useState(false);

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

  return (
    <ContenedorReservas>
      <ContenedorCalendario>
        <CalendarioPersonalizado
          onClickDay={manejarClickFecha}
          tileClassName={obtenerClaseFecha}
          value={null}
        />
      </ContenedorCalendario>
      <BotonVerReservas onClick={() => setMostrarModalReservas(true)}>
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
          <ContenidoModal>
            <EncabezadoModal>
              <TituloModal>Reservas</TituloModal>
              <BotonCerrarModal onClick={() => setMostrarModalReservas(false)}>&times;</BotonCerrarModal>
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
        </FondoModal>
      )}
    </ContenedorReservas>
  );
};

export default ReservasEsporadicas;