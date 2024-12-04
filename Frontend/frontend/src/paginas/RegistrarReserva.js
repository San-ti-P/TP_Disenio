import React, { useState, useEffect } from 'react';
import ReservasEsporadicas from '../componentes/reservaEsporadica';
import ReservaPeriodica from '../componentes/reservaPeriodica';
import { Botones, Container, FormSection, FormGroup, Label, ScheduleSection, ParrafoObli, Footer } from '../elementos/formReserva';
import { ComponenteNyAP, ComponenteDesplegableInput } from '../componentes/input';
import { Input, BotonSC } from "../elementos/formularios"
import { CancelarModal } from '../componentes/modal';
import { getActividadesDocentes } from "../services/api.js"

const RegistroReservas = () => {
  const [tipoReserva, setTipoReserva] = useState({ campo: '', valido: null });
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [apellido, setApellido] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [cantidadAlumnos, setCantidadAlumnos] = useState({ campo: '', valido: null });
  const [tipoAula, setTipoAula] = useState({ campo: '', valido: null });
  const [actividad, setActividad] = useState({ campo: '', valido: null });
  const [reservas, setReservas] = useState([]);
  const [periodo, setPeriodo] = useState(null);

  const handleReservasChange = (nuevasReservas, periodo) => {
    setReservas(nuevasReservas);
    setPeriodo(periodo);
  };

  const handleSubmit = () => {
    const formData = {
      nombre: nombre.campo,
      apellido: apellido.campo,
      correo: correo.campo,
      cantidadAlumnos: cantidadAlumnos.campo,
      tipoAula: tipoAula.campo,
      actividad: actividad.campo,
      periodo: periodo,
      tipoReserva: tipoReserva.campo,
      reservas: reservas
    };
    console.log(JSON.stringify(formData, null, 2));

  };

  useEffect(() => {
    const obtenerActividadesDocentes = async () => {
      return await getActividadesDocentes();
    };

    const act_docentes = obtenerActividadesDocentes();
    console.log(act_docentes);
    
  }, []);

  return (
    <Container>
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
            <Input 
              id="cantidadAlumnos" 
              type="number" 
              min="0" 
              placeholder="0" 
              value={cantidadAlumnos.campo}
              onChange={(e) => setCantidadAlumnos({...cantidadAlumnos, campo: e.target.value})}
            />
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
          <ReservaPeriodica onReservasChange={handleReservasChange} />
        )}

        {tipoReserva.campo === 'Esporadica' && (
          <div style={{ marginTop: "17px" }}>
            <ReservasEsporadicas onReservasChange={handleReservasChange} />
          </div>
        )}
      </ScheduleSection>

      <Footer>
        <ParrafoObli>Todos los campos son obligatorios</ParrafoObli>
        <Botones>
          <BotonSC onClick = {handleSubmit}>Siguiente</BotonSC>
          <CancelarModal 
            titulo="¿Está seguro que desea cancelar el registro?"
            texto="No podrá deshacer esta acción"
            icono="question"
            mostrarCancelar={true}
            confirmarTexto="Confirmar"
            cancelarTexto="Regresar"
            labelBoton="Cancelar"
            url="/menuBedel"
            width="380px"
          />
        </Botones>
      </Footer>
    </Container>
  );
};

export default RegistroReservas;