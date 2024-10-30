// import React from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { BotonSC } from '../elementos/formularios'; 

// const CustomModal = ({
//   titulo,
//   texto,
//   icono,
//   mostrarCancelar = false,
//   confirmarTexto = 'Confirmar',
//   cancelarTexto = 'Regresar',
//   labelBoton,
//   width = 350,
//   onConfirm,
//   type = "button"
// }) => {

//   const showAlert = () => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .swal2-confirm-button {
//         background-color: #0075FF !important;
//         user-select: none;
//       }
//     `;
//     document.head.appendChild(style);

//     Swal.fire({
//       title: titulo,
//       text: texto,
//       icon: icono,
//       showCancelButton: mostrarCancelar,
//       confirmButtonText: confirmarTexto,
//       cancelButtonText: cancelarTexto,
//       allowOutsideClick: false, // Deshabilita el clic fuera del modal
//       customClass: {
//         confirmButton: 'swal2-confirm-button'
//       },
//       width,
//       toast: true,
//     }).then((result) => {
//       if (result.isConfirmed && onConfirm) {
//         onConfirm();
//       }
//     });
//   };

//   return <BotonSC onClick={showAlert} type={type}>{labelBoton}</BotonSC>;
// };

// const CancelarModal = (props) => {
//   const navigate = useNavigate();
//   return (
//     <CustomModal
//       {...props}
//       onConfirm={() => navigate('/menu')}
//     />
//   );
// };

// const SiguienteModal = (props) => (
//   <CustomModal
//     {...props}
//     onConfirm={() => window.location.reload()}
//     type="submit"
//     width={275}
//   />
// );

// export { CustomModal, CancelarModal, SiguienteModal };


import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BotonSC } from '../elementos/formularios'; 

const CustomModal = ({
  titulo,
  texto,
  icono,
  mostrarCancelar = false,
  confirmarTexto = 'Confirmar',
  cancelarTexto = 'Regresar',
  labelBoton,
  width = 350,
  onConfirm,
  type = "button"
}) => {

  const showAlert = () => {
    const existingStyle = document.getElementById('swal-custom-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

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
      scrollbarPadding: false,  // Importante para prevenir el salto
      heightAuto: false,        // Importante para mantener la altura consistente
    }).then((result) => {
      if (result.isConfirmed && onConfirm) {
        onConfirm();
      }
    });
  };

  return <BotonSC onClick={showAlert} type={type}>{labelBoton}</BotonSC>;
};

const CancelarModal = (props) => {
  const navigate = useNavigate();
  return (
    <CustomModal
      {...props}
      onConfirm={() => navigate('/menu')}
    />
  );
};

const SiguienteModal = (props) => (
  <CustomModal
    {...props}
    onConfirm={() => window.location.reload()}
    type="submit"
    width={275}
  />
);

export { CustomModal, CancelarModal, SiguienteModal };;