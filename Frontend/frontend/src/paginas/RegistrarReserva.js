import React, { useState, useEffect } from 'react';
import ReservasEsporadicas from '../componentes/reservaEsporadica';
import ReservaPeriodica from '../componentes/reservaPeriodica';
import { Botones, Container, FormSection, FormGroup, Label, ScheduleSection, ParrafoObli, Footer } from '../elementos/formReserva';
import { ComponenteNyAP, ComponenteDesplegableInput } from '../componentes/input';
import { Input, BotonSC } from "../elementos/formularios"
import { CancelarModal } from '../componentes/modal';
import { getActividadesDocentes } from "../services/api.js"
import DataList from '../componentes/dataList.js';

const RegistroReservas = () => {
  const [tipoReserva, setTipoReserva] = useState({ campo: '', valido: null });
  const [nombreYAp, setNombreYAp] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [cantidadAlumnos, setCantidadAlumnos] = useState({ campo: '', valido: null });
  const [tipoAula, setTipoAula] = useState({ campo: '', valido: null });
  const [actividad, setActividad] = useState({ campo: '', valido: null });
  const [reservas, setReservas] = useState([]);
  const [periodo, setPeriodo] = useState(null);
  const [nombre_apellido_id, setNombre_apellido_id] = useState([]);
  const [actividadesDocentes, setActividadesDocentes] = useState({ actividades: [], docentes: [] });

  const handleReservasChange = (nuevasReservas, periodo) => {
    setReservas(nuevasReservas);
    setPeriodo(periodo);
  };

  const obtenerActividadesDocentes = async () => {
    try {
      const datos = await getActividadesDocentes();
      setActividadesDocentes(datos);
      generarNombreApellidoId(datos.docentes);
    } catch (error) {
      console.error("Error al obtener actividades y docentes: ", error);
    }
  };

  const generarNombreApellidoId = (arreglo) => {
    setNombre_apellido_id(
      arreglo.map(docente => ({
        id: docente.id_docente,
        nombre: `${docente.nombre} ${docente.apellido} - ${docente.id_docente}`,
      }))
    );
  };

  const handleNombreYApChange = (estado) => {
    setNombreYAp(estado);
    const docenteSeleccionado = actividadesDocentes.docentes.find(doc => `${doc.nombre} ${doc.apellido} - ${doc.id_docente}` === estado.campo);
    if (docenteSeleccionado) setCorreo({ campo: docenteSeleccionado.correo, valido: "true" });
    else setCorreo({ campo: '', valido: null });
  };

  const handleSubmit = async () => {
    const actividadObj = actividadesDocentes.actividades.find(act => act.nombre === actividad.campo);
    const docenteObj = actividadesDocentes.docentes.find(doc => doc.correo === correo.campo);
    
    const formData = {
      docente: docenteObj,
      cant_alumnos: parseInt(cantidadAlumnos.campo, 10),
      tipo_aula: tipoAula.campo,
      actividad: actividadObj,
      periodo: periodo,
      lista_reservaciones: reservas
    };
    console.log(JSON.stringify(formData, null, 2));

    // const respuestaReserva = await obtenerAulasReserva(formData);
    // console.log("what", respuestaReserva);

  };

  useEffect(() => { obtenerActividadesDocentes(); }, []);

  return (
    <Container>
      <FormSection>
        <div>
          <h2>Datos del solicitante</h2>
          <FormGroup>
            <DataList
              estado={nombreYAp}
              cambiarEstado={handleNombreYApChange}
              label="Nombre y Apellido"
              placeholder="Seleccione un nombre y apellido"
              name="n_yap"
              opciones={nombre_apellido_id}
            />
          </FormGroup>
          <FormGroup>
            <ComponenteNyAP
              estado={correo}
              cambiarEstado={setCorreo}
              tipo="text"
              label="Correo electrónico"
              placeholder="Correo electrónico del solicitante"
              name="correo"
              editable={false}
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
              onChange={(e) => setCantidadAlumnos({ ...cantidadAlumnos, campo: e.target.value })}
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
            <DataList
              estado={actividad}
              cambiarEstado={setActividad}
              label="Actividad"
              placeholder="Seleccione una actividad"
              name="actividad"
              opciones={actividadesDocentes.actividades}
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
          <BotonSC onClick={handleSubmit}>
            Siguiente
          </BotonSC>
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