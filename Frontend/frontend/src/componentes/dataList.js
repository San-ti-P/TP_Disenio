import React from 'react';
import {Label, Input} from "../elementos/formularios"

const DataList = ({ estado, cambiarEstado, label, placeholder, name, opciones }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        list={`datalist-${name}`}
        id={name}
        value={estado.campo}
        placeholder={placeholder}
        onChange={(e) => cambiarEstado({ ...estado, campo: e.target.value })}
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