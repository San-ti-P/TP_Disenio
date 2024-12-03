import { tuneoModal } from './modal';
import { eliminarBedel } from '../services/api';

export const manejoEliminar = async (bedel, actualizarValores) => {
  const result = await tuneoModal({
    title: `¿Está seguro de que desea eliminar al bedel ${bedel.nombre} ${bedel.apellido}?`,
    text: "Esta acción no podrá revertirse",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    width: 450
  });
  if (result.isConfirmed) {
    const respuesta = await eliminarBedel({
      nombre: bedel.nombre,
      apellido: bedel.apellido,
      turno: bedel.turno,
      identificador: bedel.id_usuario
    });

    if (respuesta) {
      await tuneoModal({
        title: 'Bedel eliminado',
        text: 'El bedel ha sido eliminado satisfactoriamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      actualizarValores();
      
    } else {
      await tuneoModal({
        title: 'Error al eliminar',
        text: 'El bedel no se ha podido eliminar correctamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
};
