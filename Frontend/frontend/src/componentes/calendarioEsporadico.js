import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarioEstilado } from "../elementos/calendario";

const CalendarioPersonalizado = ({ onClickDay, tileClassName, value }) => {
  const deshabilitarDiasAnteriores = ({ date }) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Establece la hora a las 00:00:00 para comparar solo la fecha
    return date < hoy;
  };

  return (
    <CalendarioEstilado
      onClickDay={onClickDay}
      tileClassName={tileClassName}
      value={value}
      locale="es-ES"
      formatShortWeekday={(locale, date) => ['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()]}
      tileDisabled={deshabilitarDiasAnteriores}
    />
  );
};

export default CalendarioPersonalizado;