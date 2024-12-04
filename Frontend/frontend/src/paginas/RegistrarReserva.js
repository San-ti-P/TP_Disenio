import React, { useState } from 'react';
import { Botones, Container, FormSection, FormGroup, Label, ScheduleSection, RadioGroup, RadioButton, DayButtons, DayButton, ModalOverlay, Modal, Button, ParrafoObli, Footer, DivPeriodica } from '../elementos/formReserva';
import { ComponenteNyAP, ComponenteDesplegableInput } from '../componentes/input';
import { Input, BotonSubmit } from "../elementos/formularios"
import { CancelarModal } from '../componentes/modal';
import HorarioModal from '../componentes/horarioModal'; // Import the HorarioModal component

const RegistroReservas = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [duracion, setDuracion] = useState(30);
  const [horario, setHorario] = useState([]);
  const [horaInicio, setHoraInicio] = useState('');
  const [periodo, setPeriodo] = useState('primer');
  const [tipoReserva, setTipoReserva] = useState({ campo: '', valido: null });

  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [apellido, setApellido] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });

  const [cantidadAlumnos, setCantidadAlumnos] = useState({ campo: '', valido: null });
  const [tipoAula, setTipoAula] = useState({ campo: '', valido: null });
  const [actividad, setActividad] = useState({ campo: '', valido: null });

  const [modalData, setModalData] = useState({ dia: '', horaInicio: '', duracion: 30 });

  const manejarClickDia = (dia) => {
    setModalData({ ...modalData, dia });
    setMostrarModal(true);
  };

  const manejarAgregarHorario = () => {
    if (modalData.horaInicio && modalData.duracion >= 30) {
      setHorario([...horario, { ...modalData }]);
      setDiaSeleccionado([...diaSeleccionado, modalData.dia]);
      setMostrarModal(false);
      setModalData({ dia: '', horaInicio: '', duracion: 30 });
    }
  };

  const manejarEliminarHorario = (index) => {
    const nuevosHorarios = horario.filter((_, i) => i !== index);
    const nuevosSeleccionados = nuevosHorarios.map(h => h.dia);
    setHorario(nuevosHorarios);
    setDiaSeleccionado(nuevosSeleccionados);
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
            <Label htmlFor="cantidadAlumnos">Cantidad de alumnos</Label>
            <Input id="cantidadAlumnos" type="number" min="0" placeholder="0" />
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
                <li style = {{marginBottom: "10px"}} key={index}>
                  {item.dia}: {item.horaInicio} hs - {item.duracion} minutos
                  <button style={{border: "none", position: "absolute", right: "240px"}}
                      onClick={() => manejarEliminarHorario(index)}>
                      Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </DivPeriodica>
        )}

        {tipoReserva.campo === 'Esporadica' && <h1>CALENDARIO</h1>}
      
      </ScheduleSection>

      
      {mostrarModal && (
        <HorarioModal
          modalData={modalData}
          setModalData={setModalData}
          onAceptar={manejarAgregarHorario}
          onCancelar={() => setMostrarModal(false)}
        />
      )}



      <Footer>
          <ParrafoObli>Todos los campos son obligatorios</ParrafoObli>
          <Botones>
            <BotonSubmit label="Siguiente">Siguiente</BotonSubmit>
            <CancelarModal 
              titulo="¿Está seguro que desea cancelar el registro?"
              texto="No podrá deshacer esta acción"
              icono="question"
              mostrarCancelar={true}
              confirmarTexto="Confirmar"
              cancelarTexto="Regresar"
              labelBoton="Cancelar"
              url="/menuBedel"
            />
          </Botones>
      </Footer>
    </Container>
  );
};

export default RegistroReservas;