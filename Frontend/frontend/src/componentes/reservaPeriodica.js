import React, { useState } from 'react';
import { RadioGroup, RadioButton, DayButtons, DayButton, DivPeriodica, BotonEliminarPeriodica } from '../elementos/formReserva';
import HorarioModal from './horarioModalPeriodica';

const diasMap = {
  'Lun': 'Lunes',
  'Mar': 'Martes',
  'Mie': 'Miercoles',
  'Jue': 'Jueves',
  'Vie': 'Viernes',
  'Sab': 'Sabado',
  'Dom': 'Domingo'
};

const ReservaPeriodica = ({ onReservasChange }) => {
  const [diaSeleccionado, setDiaSeleccionado] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [horario, setHorario] = useState([]);
  const [periodo, setPeriodo] = useState('Primer Cuatrimestre');
  const [modalData, setModalData] = useState({ dia: '', fecha: null, duracion: 30, hora_inicio: '' });

  const manejarClickDia = (dia) => {
    setModalData({ ...modalData, dia });
    setMostrarModal(true);
  };

  const manejarAgregarHorario = () => {
    if (modalData.hora_inicio && modalData.duracion >= 30) {
      const nuevoHorario = [...horario, { ...modalData, dia: diasMap[modalData.dia] }];
      setHorario(nuevoHorario);
      setDiaSeleccionado([...diaSeleccionado, modalData.dia]);
      setMostrarModal(false);
      setModalData({ dia: '', fecha: null, duracion: 30, hora_inicio: '' });
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
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('Primer Cuatrimestre')} defaultChecked/> 
          Primer cuatrimestre
        </RadioButton>
        <RadioButton>
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('Segundo Cuatrimestre')} />
          Segundo cuatrimestre
        </RadioButton>
        <RadioButton>
          <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('Anual')} />
          Anual
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
            {item.dia}: {item.hora_inicio} hs - {item.duracion} minutos
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