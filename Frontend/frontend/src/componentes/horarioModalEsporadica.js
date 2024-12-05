import React, { useState } from 'react';
import { Modal, ModalOverlay, FormGroup, Label, Input, ModalButtons, ModalButton } from '../elementos/formReserva';

const HorarioModalEsporadica = ({ fecha, onAceptar, onCancelar }) => {
  const [horaInicio, setHoraInicio] = useState('');
  const [duracion, setDuracion] = useState(30);

  const datosValidos = horaInicio && duracion >= 30;

  const handleAceptar = () => {
    if (datosValidos) {
      onAceptar(horaInicio, duracion);
    }
  };

  return (
    <>
      <ModalOverlay onClick={onCancelar} />
      <Modal>
        <h3>Cronograma día {fecha}</h3>
        <FormGroup>   
          <Label>Horario inicio</Label>
          <Input
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Duración (minutos)</Label>
          <Input
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(Math.max(30, Number(e.target.value)))}
            step="30"
            min="30"
          />
        </FormGroup>
        <ModalButtons>
          <ModalButton onClick={handleAceptar} disabled={!datosValidos}>Aceptar</ModalButton>
          <ModalButton onClick={onCancelar}>Cancelar</ModalButton>
        </ModalButtons>
      </Modal>
    </>
  );
};

export default HorarioModalEsporadica;