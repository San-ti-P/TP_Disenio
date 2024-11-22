import axios from "axios";  

const enviarFormulario = async (datosFormulario) => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/registrar_bedel";
    const respuesta = await axios.post(url, datosFormulario, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(respuesta.data);
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: true, mensaje: error.message };
  }
};

  
const getPoliticas = async () => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/registrar_bedel";
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener políticas: ", error);
    throw error;
  }
};

const getUsuario = async (datosLogin) => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/login";
    const respuesta = await axios.post(url, datosLogin);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener el usuario: ", error);
    throw error;
  }
}

// LLAMADA A LA API PARA RECUPERAR LOS BEDELES DE LA BUSQUEDA ------

const valores1 = [
  { "nombre": "Carlos", "apellido": "Lopez", "turno": "Noche", "identificador": "utn-11223344" },
  { "nombre": "Ana", "apellido": "Martinez", "turno": "Mañana", "identificador": "utn-11223344" },
  { "nombre": "Luis", "apellido": "Garcia", "turno": "Tarde", "identificador": "utn-11223344" },
  { "nombre": "Elena", "apellido": "Rodriguez", "turno": "Noche", "identificador": "utn-11223344" },
  { "nombre": "Pedro", "apellido": "Fernandez", "turno": "Mañana", "identificador": "utn-11223344" },
  { "nombre": "Laura", "apellido": "Gonzalez", "turno": "Tarde", "identificador": "utn-11223344" },
  { "nombre": "Jorge", "apellido": "Hernandez", "turno": "Noche", "identificador": "utn-11223344" },
  { "nombre": "Marta", "apellido": "Ruiz", "turno": "Mañana", "identificador": "utn-11223344" },
  { "nombre": "Sofia", "apellido": "Diaz", "turno": "Tarde", "identificador": "utn-11223344" },
  { "nombre": "Miguel", "apellido": "Morales", "turno": "Noche", "identificador": "utn-11223344" },
  { "nombre": "Lucia", "apellido": "Ortega", "turno": "Mañana", "identificador": "utn-11223344" },
  { "nombre": "Raul", "apellido": "Sanchez", "turno": "Tarde", "identificador": "utn-11223344" },
  { "nombre": "Carmen", "apellido": "Ramirez", "turno": "Noche", "identificador": "utn-11223344" },
  { "nombre": "Jose", "apellido": "Torres", "turno": "Mañana", "identificador": "utn-11223344" },
  { "nombre": "Patricia", "apellido": "Flores", "turno": "Tarde", "identificador": "utn-11223344" }
];

const getResultadosBusqueda = async (apellido, turno) => {
  return valores1;
  // try {
  //   const url = "http://127.0.0.1:8000/tpdisenio/buscar_bedel";
  //   const respuesta = await axios.post(url, apellido, turno);
  //   return respuesta.data;

  // } catch (error) {
  //   console.error("Error al realizar la busqueda: ", error);
  //   throw error;
  // }
}

// LLAMADA A LA API PARA ELIMINAR EL BEDEL -------
const eliminarBedel = async (datosBedel) => {
  return true;
  // try {
  //   const url = "http://127.0.0.1:8000/tpdisenio/eliminar_bedel";
  //   const respuesta = await axios.post(url, datosBedel);
  //   return respuesta.data;
  // } catch (error) {
  //   console.error("Error al eliminar bedel: ", error);
  //   throw error;
  // }
}


export {enviarFormulario, getPoliticas, getUsuario, eliminarBedel, getResultadosBusqueda}