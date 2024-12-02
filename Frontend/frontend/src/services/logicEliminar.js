import { tuneoModal } from '../componentes/modal';
import { eliminarBedel } from '../services/api';

export const manejoEliminar = async (bedel, obtenerValores) => {
    
    tuneoModal({
      title: `¿Está seguro de que desea eliminar al bedel ${bedel.nombre} ${bedel.apellido}?`,
      text: "Esta acción no podrá revertirse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      width: 450
    }).then(async (result) => {
      if (result.isConfirmed) {
        
        const respuesta = await eliminarBedel({
          nombre: bedel.nombre,
          apellido: bedel.apellido,
          turno: bedel.turno,
          identificador: bedel.id_usuario
        });
  
        if (respuesta) {
          
          tuneoModal({
            title: 'Bedel eliminado',
            text: 'El bedel ha sido eliminado satisfactoriamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          
          //obtenerValores();
        } else {
          
          tuneoModal({
            title: 'Error al eliminar',
            text: 'El bedel no se ha podido eliminar correctamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      }
    });
  };
  