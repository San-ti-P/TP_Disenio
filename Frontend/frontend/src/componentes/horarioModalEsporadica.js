import React, { useState, useEffect, useRef } from 'react';
import { Modal, ModalOverlay, FormGroup, Label, Input, ModalButtons, ModalButton } from '../elementos/formReserva';
import FocusLock from 'react-focus-lock';

const HorarioModalEsporadica = ({ fecha, onAceptar, onCancelar }) => {
  const [hora_inicio, sethora_inicio] = useState('');
  const [duracion, setDuracion] = useState(30);
  const previousFocusRef = useRef(null);

  const datosValidos = hora_inicio && duracion >= 30;

  useEffect(() => {
    // Guardar el elemento que tenía el foco antes de abrir el modal
    previousFocusRef.current = document.activeElement;
    return () => {
      // Restaurar el foco al elemento anterior cuando el modal se cierre
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  const handleAceptar = () => {
    if (datosValidos) {
      onAceptar(hora_inicio, duracion);
    }
  };

  const handleKeyDown = (e) => {
    // Permitir solo las teclas de flecha arriba, abajo y tab
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <>
      <ModalOverlay onClick={onCancelar} />
      <Modal>
        <FocusLock>
          <h3>Cronograma día {fecha}</h3>
          <FormGroup>
            <Label>Horario inicio</Label>
            <Input
              type="time"
              value={hora_inicio}
              onChange={(e) => sethora_inicio(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Duración (minutos)</Label>
            <Input
              type="number"
              value={duracion}
              onChange={(e) => setDuracion(Math.max(30, Number(e.target.value)))}
              onKeyDown={handleKeyDown}
              step="30"
              min="30"
              max="300"
            />
          </FormGroup>
          <ModalButtons>
            <ModalButton onClick={handleAceptar} disabled={!datosValidos}>Aceptar</ModalButton>
            <ModalButton onClick={onCancelar}>Cancelar</ModalButton>
          </ModalButtons>
        </FocusLock>
      </Modal>
    </>
  );
};

export default HorarioModalEsporadica;