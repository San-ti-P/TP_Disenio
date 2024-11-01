import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BotonSC } from '../elementos/formularios'; 
import axios from "axios";  

const enviarFormulario = async (datosFormulario) => {
  try {
    const url = "http://127.0.0.1:8000/tpdisenio/RegistrarBedel";
    const respuesta = await axios.post(url, datosFormulario, { headers: {"Content-Type": "application/json", }, }); // enviamos entrada al backend
    manejarRespuesta(respuesta.data.errors); // logica de la respuesta
    console.log(respuesta.data);
  } catch (error) { console.error(error); }
}

const manejarRespuesta = (respuesta) => {
  if (respuesta.length === 0) mostrarModalExito();
  else {
    if (respuesta.includes("campos_invalidos"))     { alert("Eror de campo")}; // mostrar leyenda de Campo
    if (respuesta.includes("contrasenia_invalida")) { alert("Error de contrasenia")}; // mostrar leyenda de Contrasenia
    if (respuesta.includes("id_existente"))         { alert("ID existente")}; // mostrar leyenda de ID
  }
}

const tuneoModal = () => {
  
}

const CancelarModal = ({
  titulo, texto, icono,
  mostrarCancelar = false,
  confirmarTexto = 'Confirmar',
  cancelarTexto = 'Regresar',
  labelBoton, width = 350, onConfirm,
  type = "button"
}) => {
  const navigate = useNavigate();
  const mostrarAlerta = () => {
    const existingStyle = document.getElementById('swal-custom-styles');
    if (existingStyle) existingStyle.remove();

    const style = document.createElement("style");
    style.id = 'swal-custom-styles';
    style.innerHTML = `
      .swal2-container {
        background-color: rgba(0, 0, 0, 0.25) !important;
        backdrop-filter: blur(5px);
        position: fixed !important;
        overflow-y: auto !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .swal2-html-container {
        margin: 1em 1.6em 0.3em !important;
      }
      .swal2-popup {
        position: relative !important;
        display: flex !important;
        flex-direction: column !important;
        background: #fff !important;
        margin: 0 !important;
        padding: 1.25em !important;
        border-radius: 5px !important;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
        transform: none !important;
        max-height: 100vh !important;
      }
      .swal2-shown {
        overflow: hidden !important;
        padding-right: 0 !important;
      }
      body.swal2-shown {
        padding-right: 0 !important;
        overflow: hidden !important;
      }
      body.swal2-shown > [aria-hidden="true"] {
        filter: none !important;
        transition: none !important;
        transform: none !important;
      }
      .swal2-confirm {
        background-color: #0075FF !important;
        color: white !important;
      }
      .swal2-cancel {
        background-color: #6c757d !important;
        color: white !important;
      }
    `;
    document.head.appendChild(style);

    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      showCancelButton: mostrarCancelar,
      confirmButtonText: confirmarTexto,
      cancelButtonText: cancelarTexto,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
      backdrop: true,
      focusConfirm: true,
      customClass: {
        container: 'swal2-container',
        popup: 'swal2-popup'
      },
      width,
      position: 'center',
      scrollbarPadding: false,
      heightAuto: false,        
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/menu') }
    });
  };

  return <BotonSC onClick={mostrarAlerta} type={type}>{labelBoton}</BotonSC>;
};

const mostrarModalExito = () => {
  const existingStyle = document.getElementById('swal-custom-styles');
  if (existingStyle) existingStyle.remove();
  const style = document.createElement("style");
  style.id = 'swal-custom-styles';
  style.innerHTML = `
    .swal2-container {
      background-color: rgba(0, 0, 0, 0.25) !important;
      backdrop-filter: blur(5px);
      position: fixed !important;
      overflow-y: auto !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .swal2-html-container {
      margin: 1em 1.6em 0.3em !important;
    }
    .swal2-popup {
      position: relative !important;
      display: flex !important;
      flex-direction: column !important;
      background: #fff !important;
      margin: 0 !important;
      padding: 1.25em !important;
      border-radius: 5px !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
      transform: none !important;
      max-height: 100vh !important;
    }
    .swal2-shown {
      overflow: hidden !important;
      padding-right: 0 !important;
    }
    body.swal2-shown {
      padding-right: 0 !important;
      overflow: hidden !important;
    }
    body.swal2-shown > [aria-hidden="true"] {
      filter: none !important;
      transition: none !important;
      transform: none !important;
    }
    .swal2-confirm {
      background-color: #0075FF !important;
      color: white !important;
    }
    .swal2-cancel {
      background-color: #6c757d !important;
      color: white !important;
    }
  `;
  document.head.appendChild(style);

  Swal.fire({
    title: "Bedel registrado satisfactoriamente",
    text: "",
    icon: "info",
    showCancelButton: false,
    confirmButtonText: "Confirmar",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    backdrop: true,
    focusConfirm: true,
    customClass: {
      container: 'swal2-container',
      popup: 'swal2-popup',
      confirmButton: 'swal2-confirm'
    },
    width: 380,
    position: 'center',
    scrollbarPadding: false,  
    heightAuto: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  })
};


export { CancelarModal, enviarFormulario };