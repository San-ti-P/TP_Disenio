import React, { useState } from 'react';
import { RadioGroup, RadioButton, DayButtons, DayButton, DivPeriodica, BotonEliminarPeriodica } from '../elementos/formReserva';
import HorarioModal from './horarioModalPeriodica';

const ReservaPeriodica = ({ onReservasChange }) => {
  const [diaSeleccionado, setDiaSeleccionado] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [horario, setHorario] = useState([]);
  const [periodo, setPeriodo] = useState('primer');
  const [modalData, setModalData] = useState({ dia: '', horaInicio: '', duracion: 30 });

  const manejarClickDia = (dia) => {
    setModalData({ ...modalData, dia });
    setMostrarModal(true);
  };

  const manejarAgregarHorario = () => {
    if (modalData.horaInicio && modalData.duracion >= 30) {
      const nuevoHorario = [...horario, { ...modalData }];
      setHorario(nuevoHorario);
      setDiaSeleccionado([...diaSeleccionado, modalData.dia]);
      setMostrarModal(false);
      setModalData({ dia: '', horaInicio: '', duracion: 30 });
      onReservasChange(nuevoHorario, periodo);
    }
  };

  const manejarEliminarHorario = (index) => {
    const nuevosHorarios = horario.filter((_, i) => i !== index);
    const nuevosSeleccionados = nuevosHorarios.map(h => h.dia);
    setHorario(nuevosHorarios);
    setDiaSeleccionado(nuevosSeleccionados);
    onReservasChange(nuevosHorarios);
  };

  return (
    <DivPeriodica>
      <RadioGroup>
        <RadioButton>
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('primer')} defaultChecked/> Primer cuatrimestre
        </RadioButton>
        <RadioButton>
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('segundo')} /> Segundo cuatrimestre
        </RadioButton>
        <RadioButton>
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('anual')} /> Anual
        </RadioButton>
      </RadioGroup>

      <DayButtons>
        {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'].map((dia) => (
          <DayButton
            key={dia}
            onClick={() => !diaSeleccionado.includes(dia) && manejarClickDia(dia)}
            selected={diaSeleccionado.includes(dia)}>
            {dia}
          </DayButton>
        ))}
      </DayButtons>

      <h3>Horarios seleccionados:</h3>
      <ul>
        {horario.map((item, index) => (
          <li style={{ marginBottom: "10px" }} key={index}>
            {item.dia}: {item.horaInicio} hs - {item.duracion} minutos
            <BotonEliminarPeriodica onClick={() => manejarEliminarHorario(index)}> Eliminar </BotonEliminarPeriodica>
          </li>
        ))}
      </ul>

      {mostrarModal && (
        <HorarioModal
          modalData={modalData}
          setModalData={setModalData}
          onAceptar={manejarAgregarHorario}
          onCancelar={() => setMostrarModal(false)}
        />
      )}
    </DivPeriodica>
  );
};

export default ReservaPeriodica;