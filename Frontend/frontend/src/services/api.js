// import axios from "axios";  

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/tpdisenio/", 
//   withCredentials: true,
//   credentials: "include"
// });

// const enviarFormulario = async (datosFormulario) => {
//   try {
//     const url = "http://127.0.0.1:8000/tpdisenio/bedeles";
//     const respuesta = await api.post(url, datosFormulario, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(respuesta.data);
//     return respuesta;
//   } catch (error) {
//     console.error(error);
//     return { error: true, mensaje: error.message };
//   }
// };

// const getPoliticas = async () => {
//   try {
//     const url = "http://127.0.0.1:8000/tpdisenio/politicas";
//     const respuesta = await api.get(url);
//     return respuesta.data;
//   } catch (error) {
//     console.error("Error al obtener políticas: ", error);
//     throw error;
//   }
// };

// const enviarUsuario = async (datosLogin) => {
//   try {
//     const respuesta = await api.post("/login", datosLogin);
//     return respuesta.data;
//   } catch (error) {
//     console.error("Error al obtener el usuario: ", error);
//     throw error;
//   }
// }

// const getResultadosBusqueda = async (apellido, turno) => {
//   try {
//     let url = "http://127.0.0.1:8000/tpdisenio/bedeles";

//     if (apellido !== "" && turno !== "") {
//       url += `?apellido=${apellido}&turno=${turno}`;
//     } else if (apellido !== "") {
//       url += `?apellido=${apellido}`;
//     } else if (turno !== "") {
//       url += `?turno=${turno}`;
//     }

//     const respuesta = await api.get(url);
//     return respuesta.data;

//   } catch (error) {
//     console.error("Error al realizar la busqueda: ", error);
//     throw error;
//   }
// }

// const eliminarBedel = async (datosBedel) => {
//   try {
//     const id = datosBedel.identificador;
//     const url = `http://127.0.0.1:8000/tpdisenio/bedeles?id=${id}`;
//     const respuesta = await api.delete(url);
//     return respuesta.data;
//   } catch (error) {
//     console.error("Error al eliminar bedel: ", error.response?.data || error.message);
//     throw error;
//   }
// };

// const modificarBedel = async (datosFormulario) => {
//   try {
//     const url = "http://127.0.0.1:8000/tpdisenio/bedeles";
//     const respuesta = await api.put(url, datosFormulario, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(respuesta.data);
//     return respuesta;
//   } catch (error) {
//     console.error(error);
//     return { error: true, mensaje: error.message };
//   }
// };

// const getActividadesDocentes = async () => {
//   try {
//     const url = "http://127.0.0.1:8000/tpdisenio/iniciar_reserva";
//     const respuesta = await api.get(url);
//     return respuesta.data;
    
//   } catch (error) {
//     console.error("Error al obtener actividades y docentes: ", error);
//     throw error;
//   }
// };

// const obtenerAulasReserva = async (datosReserva) => {
//   try {
//     const url = "http://127.0.0.1:8000/tpdisenio/iniciar_reserva";
//     const respuesta = await api.post(url, datosReserva);
//     return respuesta.data;
//   } catch (error) {
//     console.error("Error al enviar la reserva: ", error);
//     throw error;
//   }
// }

// export {enviarFormulario, getPoliticas, enviarUsuario, eliminarBedel, getResultadosBusqueda, modificarBedel, getActividadesDocentes, obtenerAulasReserva}

import axios from "axios";  

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/tpdisenio/", 
  withCredentials: true
  //credentials: "include"
});

const enviarFormulario = async (datosFormulario) => {
  try {
    const respuesta = await api.post("/bedeles", datosFormulario, {
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
    const respuesta = await api.get("/politicas");
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener políticas: ", error);
    throw error;
  }
};

const enviarUsuario = async (datosLogin) => {
  try {
    const respuesta = await api.post("/login", datosLogin);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener el usuario: ", error);
    throw error;
  }
}

const getResultadosBusqueda = async (apellido, turno) => {
  try {
    let url = "/bedeles";

    if (apellido !== "" && turno !== "") {
      url += `?apellido=${apellido}&turno=${turno}`;
    } else if (apellido !== "") {
      url += `?apellido=${apellido}`;
    } else if (turno !== "") {
      url += `?turno=${turno}`;
    }

    const respuesta = await api.get(url);
    return respuesta.data;

  } catch (error) {
    console.error("Error al realizar la busqueda: ", error);
    throw error;
  }
}

const eliminarBedel = async (datosBedel) => {
  try {
    const id = datosBedel.identificador;
    const url = `/bedeles?id=${id}`;
    const respuesta = await api.delete(url);
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar bedel: ", error.response?.data || error.message);
    throw error;
  }
};

const modificarBedel = async (datosFormulario) => {
  try {
    const respuesta = await api.put("/bedeles", datosFormulario, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(respuesta.data);
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: true, mensaje: error.message };
  }
};

const getActividadesDocentes = async () => {
  try {
    const respuesta = await api.get("/iniciar_reserva");
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener actividades y docentes: ", error);
    throw error;
  }
};

const obtenerAulasReserva = async (datosReserva) => {
  try {
    const respuesta = await api.post("/iniciar_reserva", datosReserva);
    return respuesta.data;
  } catch (error) {
    console.error("Error al enviar la reserva: ", error);
    throw error;
  }
}

export {enviarFormulario, getPoliticas, enviarUsuario, eliminarBedel, getResultadosBusqueda, modificarBedel, getActividadesDocentes, obtenerAulasReserva}