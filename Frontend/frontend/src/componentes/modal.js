import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BotonSC } from '../elementos/formularios'; 
// https://sweetalert2.github.io/

const Modal = ({titulo, texto, icono, mostrarCancelar, confirmarTexto, cancelarTexto, labelBoton}) => {
  const navigate = useNavigate();

  const showAlert = () => {

    const style = document.createElement('style');
    style.innerHTML = `
      .swal2-confirm-button {
        background-color: #0075FF !important;
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
      customClass: {
        confirmButton: 'swal2-confirm-button'
      }
    }).then((result) => { if (result.isConfirmed) { navigate('/menu'); } });
  };
  
  return (  <BotonSC onClick={showAlert}>{labelBoton}</BotonSC>  );
};

export default Modal;