import axios from "axios";  

const enviarFormulario = async (datosFormulario) => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/bedeles";
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
    const url = "http://127.0.0.1:8000/tpdisenio/politicas";
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

// const valores1 = [
//   { "nombre": "Carlos", "apellido": "Lopez", "turno": "Noche", "identificador": "utn-112233" },
//   { "nombre": "Ana", "apellido": "Martinez", "turno": "Mañana", "identificador": "utn-223344" },
//   { "nombre": "Luis", "apellido": "Garcia", "turno": "Tarde", "identificador": "utn-334455" },
//   { "nombre": "Elena", "apellido": "Rodriguez", "turno": "Noche", "identificador": "utn-445566" },
//   { "nombre": "Pedro", "apellido": "Fernandez", "turno": "Mañana", "identificador": "utn-556677" },
//   { "nombre": "Laura", "apellido": "Gonzalez", "turno": "Tarde", "identificador": "utn-667788" },
//   { "nombre": "Jorge", "apellido": "Hernandez", "turno": "Noche", "identificador": "utn-778899" },
//   { "nombre": "Marta", "apellido": "Ruiz", "turno": "Mañana", "identificador": "utn-889900" },
//   { "nombre": "Sofia", "apellido": "Diaz", "turno": "Tarde", "identificador": "utn-990011" },
//   { "nombre": "Miguel", "apellido": "Morales", "turno": "Noche", "identificador": "utn-001122" },
//   { "nombre": "Lucia", "apellido": "Ortega", "turno": "Mañana", "identificador": "utn-112233" },
//   { "nombre": "Raul", "apellido": "Sanchez", "turno": "Tarde", "identificador": "utn-223344" },
//   { "nombre": "Carmen", "apellido": "Ramirez", "turno": "Noche", "identificador": "utn-334455" },
//   { "nombre": "Jose", "apellido": "Torres", "turno": "Mañana", "identificador": "utn-445566" },
//   { "nombre": "Patricia", "apellido": "Flores", "turno": "Tarde", "identificador": "utn-556677" }
// ];

const getResultadosBusqueda = async (apellido, turno) => {
  try {
    let url = "http://127.0.0.1:8000/tpdisenio/bedeles";

    if (apellido !== "" && turno !== "") {
      url += `?apellido=${apellido}&turno=${turno}`;
    } else if (apellido !== "") {
      url += `?apellido=${apellido}`;
    } else if (turno !== "") {
      url += `?turno=${turno}`;
    }

    const respuesta = await axios.get(url);
    return respuesta.data;

  } catch (error) {
    console.error("Error al realizar la busqueda: ", error);
    throw error;
  }
}

// LLAMADA A LA API PARA ELIMINAR EL BEDEL -------
const eliminarBedel = async (datosBedel) => {
  try {
    const id = datosBedel.identificador;
    const url = `http://127.0.0.1:8000/tpdisenio/bedeles?id=${id}`;
    const respuesta = await axios.delete(url);
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar bedel: ", error.response?.data || error.message);
    throw error;
  }
};

const modificarBedel = async (datosFormulario) => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/bedeles";
    const respuesta = await axios.put(url, datosFormulario, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(respuesta.data);
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: true, mensaje: error.message };
  }
};



export {enviarFormulario, getPoliticas, getUsuario, eliminarBedel, getResultadosBusqueda, modificarBedel}