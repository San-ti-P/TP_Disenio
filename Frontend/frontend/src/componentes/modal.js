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
      width,
      toast: true,
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

export { CustomModal, CancelarModal, SiguienteModal };