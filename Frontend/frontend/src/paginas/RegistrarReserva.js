import React, { useState } from 'react';
import {
  Container,
  FormSection,
  FormGroup,
  Label,
  ScheduleSection,
  RadioGroup,
  RadioButton,
  DayButtons,
  DayButton,
  ModalOverlay,
  Modal,
  Button,
  ParrafoObli
} from '../elementos/formReserva';
import { ComponenteNyAP, ComponenteDesplegableInput } from '../componentes/input';
import {Input} from "../elementos/formularios"

const RegistroReservas = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [duration, setDuration] = useState(30);
  const [schedule, setSchedule] = useState([]);
  const [periodo, setPeriodo] = useState('');
  const [tipoReserva, setTipoReserva] = useState({ campo: '', valido: null });


  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [apellido, setApellido] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });

  const [cantAlum, setCantAlumn] = useState({ campo: '', valido: null });
  const [tipoAula, setTipoAula] = useState({ campo: '', valido: null });
  const [actividad, setActividad] = useState({ campo: '', valido: null });

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowModal(true);
  };

  const handleAddSchedule = (startTime) => {
    setSchedule([...schedule, { day: selectedDay, startTime, duration }]);
    setShowModal(false);
  };

  return (
    <Container>
        {/* Seccion izquierda */}
      <FormSection>
        <div>
          <h2>Datos del solicitante</h2>
          <FormGroup>
            <ComponenteNyAP
              estado={nombre}
              cambiarEstado={setNombre}
              tipo="text"
              label="Nombre"
              placeholder="Ingrese su nombre"
              name="nombre"
            />
          </FormGroup>
          <FormGroup>
            <ComponenteNyAP
                estado={apellido}
                cambiarEstado={setApellido}
                tipo="text"
                label="Apellido"
                placeholder="Ingrese su apellido"
                name="apellido"
            /> 
          </FormGroup>
          <FormGroup>
            <ComponenteNyAP
                estado={correo}
                cambiarEstado={setCorreo}
                tipo="text"
                label="Correo electronico"
                placeholder="Ingrese su correo electronico"
                name="correo"
            />
          </FormGroup>
        </div>
        <div>
          <h2>Datos del aula</h2>
          <FormGroup>
            <Label htmlFor="cantAlum">Cantidad de alumnos</Label>
            <Input id="cantAlum" type="number" min="0" placeholder="0" />
          </FormGroup>

          <FormGroup>
            <ComponenteDesplegableInput 
                estado={tipoAula}
                cambiarEstado={setTipoAula}
                tipo="text" 
                label="Tipo de aula" 
                placeholder="Seleccione un tipo de aula"
                name="tipoAula"
                valores={["Informatica", "Sin recursos adicionales", "Multimedios"]}
            />
          </FormGroup>

          <FormGroup>
                <ComponenteNyAP
                    estado={actividad}
                    cambiarEstado={setActividad}
                    tipo="text"
                    label="Actividad"
                    placeholder="Ingrese la actividad"
                    name="actividad"
                />
            </FormGroup>
        </div>
        <ParrafoObli>Todos los campos son obligatorios</ParrafoObli>
      </FormSection>

      {/* Seccion derecha */}
      <ScheduleSection>
        <h2>Datos de la reserva</h2>
        <FormGroup>
        <ComponenteDesplegableInput 
                estado={tipoReserva}
                cambiarEstado={setTipoReserva}
                tipo="text" 
                label="Tipo de reserva" 
                placeholder="Seleccione un tipo de reserva"
                name="tipoReserva"
                valores={["Periodica", "Esporadica"]}
            />
        </FormGroup>



        {tipoReserva.campo === 'Periodica' && (
          <>
            <RadioGroup>
              <RadioButton>
                <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('primer')} /> Primer cuatrimestre
              </RadioButton>
              <RadioButton>
                <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('segundo')} /> Segundo cuatrimestre
              </RadioButton>
              <RadioButton>
                <input type="radio" name="cuatrimestre" onChange={() => setPeriodo('anual')} /> Anual
              </RadioButton>
            </RadioGroup>

            <DayButtons>
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
                <DayButton
                  key={day}
                  onClick={() => handleDayClick(day)}
                  selected={selectedDay === day}
                >
                  {day}
                </DayButton>
              ))}
            </DayButtons>

            <h3>Horarios seleccionados:</h3>
            <ul>
              {schedule.map((item, index) => (
                <li key={index}>
                  {item.day}: {item.startTime} - {item.duration} minutos
                </li>
              ))}
            </ul>
          </>
        )}
        {tipoReserva.campo === 'Esporadica' && <h1>CALENDARIO</h1>}
      </ScheduleSection>

      {/* Modal */}
      {showModal && (
        <>
          <ModalOverlay onClick={() => setShowModal(false)} />
          <Modal>
            <h3>Cronograma {selectedDay}</h3>
            <FormGroup>
              <Label>Horario inicio</Label>
              <Input type="time" />
            </FormGroup>
            <FormGroup>
              <Label>Duración</Label>
              <Input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Math.max(30, Number(e.target.value)))}
                step="30"
                min="30"
              />
            </FormGroup>
            <Button onClick={() => handleAddSchedule('00:00')}>Aceptar</Button>
            <Button onClick={() => setShowModal(false)}>Cancelar</Button>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default RegistroReservas;