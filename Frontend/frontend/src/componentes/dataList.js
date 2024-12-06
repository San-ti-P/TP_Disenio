import React from 'react';
import { Label, Input } from "../elementos/formularios";

const DataList = ({ estado, cambiarEstado, label, placeholder, name, opciones }) => {
  const handleChange = (e) => {
    const valor = e.target.value;
    const esValido = opciones.some(opcion => opcion.nombre === valor);
    cambiarEstado({ ...estado, campo: valor, valido: esValido });
  };

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        list={`datalist-${name}`}
        id={name}
        value={estado.campo}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <datalist id={`datalist-${name}`}>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion.nombre} />
        ))}
      </datalist>
    </>
  );
};

export default DataList;