import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BotonSC } from '../elementos/formularios'; 
// https://sweetalert2.github.io/

const Modal = ({titulo, texto, icono, mostrarCancelar, confirmarTexto, cancelarTexto, labelBoton}) => {
  const navigate = useNavigate();

  const showAlert = () => {

    const style = document.createElement("style");
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
      },
      width: 350,
      toast: true,
      
    }).then((result) => { if (result.isConfirmed) { navigate('/menu'); } });
  };
  
  return (  <BotonSC onClick={showAlert} type="button">{labelBoton}</BotonSC>  );
};


const ModalSiguiente = ({titulo, texto, icono, mostrarCancelar, confirmarTexto, cancelarTexto, labelBoton}) => {
  const navigate = useNavigate();
  const showAlert = () => {

    const style = document.createElement("style");
    style.innerHTML =  `
      .swal2-confirm-button {
        background-color: #0075FF !important;
      }
    ` ;
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
      },
      width: 275,
      toast: true,
      
    }).then((result) => { 
      if (result.isConfirmed) { 
      window.location.reload(); // Para hacer un F5 al haber cargado el bedel, o podemos navegar y hacer el F5. PENSARLO!
      } 
    });
    };

return (  <BotonSC onClick={showAlert} type="sumbit">{labelBoton}</BotonSC>  );
};

export {Modal, ModalSiguiente};