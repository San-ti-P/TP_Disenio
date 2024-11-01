import axios from "axios";  

const enviarFormulario = async (datosFormulario, funcion) => {
    try {
      const url = "http://127.0.0.1:8000/tpdisenio/RegistrarBedel";
      const respuesta = await axios.post(url, datosFormulario, { headers: {"Content-Type": "application/json", }, }); // enviamos entrada al backend
      manejarRespuesta(respuesta.data.errors, funcion); // logica de la respuesta
      console.log(respuesta.data);
    } catch (error) { console.error(error); }
  }
  
  const manejarRespuesta = (respuesta, funcion) => {
    if (respuesta.length === 0) funcion();
    else {
      if (respuesta.includes("campos_invalidos"))     { alert("Eror de campo")}; // mostrar leyenda de Campo
      if (respuesta.includes("contrasenia_invalida")) { alert("Error de contrasenia")}; // mostrar leyenda de Contrasenia
      if (respuesta.includes("id_existente"))         { alert("ID existente")}; // mostrar leyenda de ID
    }
  }

export {enviarFormulario}