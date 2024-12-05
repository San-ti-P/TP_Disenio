let user = null;

export const login = (userData) => {  user = userData; };
export const logout = () => { user = null; };
export const isAutenticado = () => user !== null;
export const obtenerRolUsuario = () => user?.rango;