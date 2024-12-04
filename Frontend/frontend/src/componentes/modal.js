import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BotonSC } from '../elementos/formularios'; 
import zIndex from '@mui/material/styles/zIndex';

const tuneoModal = (config) => {
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
    z-index: 11000 !important;
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
  
  const defaultConfig = {
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    backdrop: true,
    focusConfirm: true,
    customClass: {
      container: 'swal2-container',
      popup: 'swal2-popup'
    },
    width: 380,
    position: 'center',
    scrollbarPadding: false,
    heightAuto: false
    
  };

  const finalConfig = { ...defaultConfig, ...config };

  return Swal.fire(finalConfig);
};

const CancelarModal = ({
  titulo, texto, icono,
  mostrarCancelar = false,
  confirmarTexto = 'Confirmar',
  cancelarTexto = 'Regresar',
  labelBoton, 
  width = 320,
  type = "button",
  url = '/menuAdm',
  onConfirm
}) => {
  const navigate = useNavigate();
  const mostrarAlerta = () => {
    tuneoModal({
      title: titulo,
      text: texto,
      icon: icono,
      showCancelButton: mostrarCancelar,
      confirmButtonText: confirmarTexto,
      cancelButtonText: cancelarTexto,
      width: width,
      zIndex: 12000
    }).then((result) => {
      if (result.isConfirmed) {
        if (onConfirm) {
          onConfirm();
        }
        if (url !== '') {
          navigate(url);
        }
      } else if (url === '') {
        Swal.close();
      }
    });
  };

  return <BotonSC onClick={mostrarAlerta} type={type}>{labelBoton}</BotonSC>;
};

const mostrarModalExito = (onConfirm) => {
  tuneoModal({
    title: "Bedel registrado satisfactoriamente",
    text: "",
    icon: "info",
    confirmButtonText: "Confirmar"
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Bedel registrado");
      if (onConfirm) {
        onConfirm();
      }
    }
  });
};

const mostrarModalExitoModificar = (onConfirm) => {
  tuneoModal({
    title: "Bedel modificado satisfactoriamente",
    text: "",
    icon: "info",
    confirmButtonText: "Confirmar"
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Bedel cambiado...");
      if (onConfirm) {
        onConfirm();
      }
    }
  });
};

export { CancelarModal, mostrarModalExito, tuneoModal, mostrarModalExitoModificar };