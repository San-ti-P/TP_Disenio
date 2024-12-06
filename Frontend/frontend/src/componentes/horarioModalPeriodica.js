import React from 'react';
import { Modal, ModalOverlay, FormGroup, Label, Input, ModalButtons, ModalButton } from '../elementos/formReserva';

const HorarioModal = ({ modalData, setModalData, onAceptar, onCancelar }) => {
  const datosValidos = modalData.hora_inicio && modalData.duracion >= 30;

  const handleCancel = () => {
    setModalData({ ...modalData, duracion: 30 , hora_inicio: ''});
    onCancelar();
  };

  const handleKeyDown = (e) => {
    // Permitir solo las teclas de flecha arriba y abajo
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown'  && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  return (
    <>
      <ModalOverlay onClick={handleCancel} />
      <Modal>
        <h3>Cronograma {modalData.dia}</h3>
        <FormGroup>   
          <Label>Horario inicio</Label>
          <Input
            type="time"
            value={modalData.hora_inicio}
            onChange={(e) => setModalData({ ...modalData, hora_inicio: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Duración (minutos)</Label>
          <Input
            type="number"
            value={modalData.duracion}
            onChange={(e) => setModalData({ ...modalData, duracion: Math.max(30, Number(e.target.value)) })}
            onKeyDown={handleKeyDown}
            step="30"
            min="30"
            max="300"
          />
        </FormGroup>
        <ModalButtons>
          <ModalButton onClick={onAceptar} disabled={!datosValidos}>Aceptar</ModalButton>
          <ModalButton onClick={handleCancel}>Cancelar</ModalButton>
        </ModalButtons>
      </Modal>
    </>
  );
};

export default HorarioModal;