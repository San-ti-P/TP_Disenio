import React from 'react';
import 'react-calendar/dist/Calendar.css';
import {CalendarioEstilado} from "../elementos/calendario"

const CalendarioPersonalizado = ({ onClickDay, tileClassName, value }) => {
  return (
    <CalendarioEstilado
      onClickDay={onClickDay}
      tileClassName={tileClassName}
      value={value}
      locale="es-ES"
      formatShortWeekday={(locale, date) => ['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()]}
    />
  );
};

export default CalendarioPersonalizado;