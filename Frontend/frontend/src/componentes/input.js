import React from "react";
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion, Select } from "./../elementos/formularios";
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
    
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
                //console.log("input valido")
            }
            else{
                cambiarEstado({...estado, valido: 'false'});
                //console.log("input invalido")
            } 
        }
        if(funcion){
            funcion();
        }
        
    }
    
    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label> 
            <GrupoInput>
                <Input 
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}>
                </Input>
                <IconoValidacion icon={faCircleCheck} />
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </React.Fragment>
    );
};

const ComponenteDesplegableInput = ({tipo, label, placeholder, name, leyendaError, expresionRegular}) => {
    return (
        <React.Fragment>
            <Label htmlFor={name}>{label}</Label>
            <GrupoInput>
            <Select type={tipo} id={name} placeholder={placeholder}>
                <option disabled selected>Seleccione una opcion</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
            </Select>
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </React.Fragment>
    );
}

export {ComponenteInput, ComponenteDesplegableInput};