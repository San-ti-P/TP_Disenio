import React, {useState} from "react";
import {Input, Label, GrupoInput, Select, LeyendaError, FilaCompletaCheckbox } from "./../elementos/formularios";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: "#f5f5f5", 
      color: "#333",               
      fontSize: "0.875rem",         
      border: "px solid #dadde9",  
      padding: "15px",              
      borderRadius: "4px",          
    },
    [`& .MuiTooltip-arrow`]: {
      color: "#f5f5f5", 
    },
  });

// const ComponenteDesplegableInput = ({estado, cambiarEstado, tipo, label, placeholder, name}) => {

//     const validacion = (e) => {
//         if(e.target.value === 'Seleccione una opcion'){
//             cambiarEstado({...estado, valido: 'false'});
//         }
//         else{
//             cambiarEstado({...estado, valido: 'true'});
//         }     
//     }
    
//     return (
//         <React.Fragment>
//             <Label htmlFor={name} valido={estado.valido}>{label}</Label>
//             <GrupoInput>
//             <Select 
//                 type={tipo} 
//                 id={name} 
//                 placeholder={placeholder}
//                 onBlur={validacion}
//                 valido={estado.valido}>
//                 <option disabled selected>Seleccione una opcion</option>
//                 <option value="mañana">Mañana</option>
//                 <option value="tarde">Tarde</option>
//                 <option value="noche">Noche</option>
//             </Select>
//             </GrupoInput>
//         </React.Fragment>
//     );
// }

const ComponenteDesplegableInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError}) => {
    
    const validacion = (e) => {
        if(e.target.value === 'Seleccione una opcion'){
            cambiarEstado({...estado, valido: 'false'});
        }
        else{
            cambiarEstado({...estado, valido: 'true'});
        } 
    }
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value, valido: 'true' });
    };
    
    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
            <Select 
                type={tipo} 
                id={name}
                value={estado.campo}  // Control del valor con estado 
                placeholder={placeholder}
                onBlur={validacion}
                onChange={onChange}
                valido={estado.valido}>
                <option value="" disabled selected>Seleccione una opcion</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
            </Select>
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </React.Fragment>
    );
}

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion, textoTooltip}) => {

    const [mostrarPassword, setMostrarPassword] = useState(false);

    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            } else {
                cambiarEstado({...estado, valido: 'false'});
            } 
        }
        if(funcion){
            funcion();
        }
    }

    const formateoTextoTooltip = () => {
        return textoTooltip.split("\n").map((renglon, indice) => (
            <span key={indice}>{renglon}<br /></span>
        ));
    };

    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label> 
            <GrupoInput>
                {textoTooltip ? (
                    <CustomTooltip 
                        title={
                            <React.Fragment>
                                {formateoTextoTooltip()}
                            </React.Fragment>
                        }
                        placement="right"
                        arrow
                        disableHoverListener>
                        <Input 
                            type={mostrarPassword ? "text" : tipo} 
                            placeholder={placeholder}
                            id={name}
                            value={estado.campo}
                            onChange={onChange}
                            onKeyUp={validacion}
                            onBlur={validacion}
                            valido={estado.valido}>
                        </Input>
                    </CustomTooltip>
                ) : (
                    <Input 
                        type={mostrarPassword ? "text" : tipo}
                        placeholder={placeholder}
                        id={name}
                        value={estado.campo}
                        onChange={onChange}
                        onKeyUp={validacion}
                        onBlur={validacion}
                        valido={estado.valido}>
                    </Input>
                )}
            </GrupoInput>
            
            {tipo === "password" && (
                <FilaCompletaCheckbox>
                    <input
                        type="checkbox"
                        id={`mostrar-${name}`}
                        checked={mostrarPassword}
                        onChange={() => setMostrarPassword(!mostrarPassword)}
                    />
                    <label htmlFor={`mostrar-${name}`}>Mostrar contraseña</label>
                </FilaCompletaCheckbox>
            )}
            
            <LeyendaError>{leyendaError}</LeyendaError>
        </React.Fragment>
    );
};

export {ComponenteInput, ComponenteDesplegableInput};