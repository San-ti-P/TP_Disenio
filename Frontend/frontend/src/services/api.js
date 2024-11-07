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

export {enviarFormulario, getPoliticas, getUsuario}