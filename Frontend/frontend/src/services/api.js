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

const getActividadesDocentes = async () => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/iniciar_reserva";
    const respuesta = await axios.get(url);
    return respuesta.data;
    
  } catch (error) {
    console.error("Error al obtener actividades y docentes: ", error);
    throw error;
  }
};

export {enviarFormulario, getPoliticas, getUsuario, eliminarBedel, getResultadosBusqueda, modificarBedel, getActividadesDocentes}