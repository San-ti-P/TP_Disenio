// import React, {useState} from "react";
// import {Input, Label, GrupoInput, Select, IconoPassword} from "./../elementos/formularios";
// import Tooltip from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';
// import { Eye, EyeOff } from 'lucide-react';

// const CustomTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} classes={{ popper: className }} />
// ))({
//     [`& .MuiTooltip-tooltip`]: {
//         backgroundColor: "#f5f5f5", 
//         color: "#333",               
//         fontSize: "0.875rem",         
//         border: "px solid #dadde9",  
//         padding: "15px",              
//         borderRadius: "4px",          
//     },
//     [`& .MuiTooltip-arrow`]: {
//         color: "#f5f5f5", 
//     },
// });

// const formateoTextoTooltip = (texto) => {
//     return texto.split("\n").map((renglon, indice) => (
//         <span key={indice}>{renglon}<br /></span>
//     ));
// };

// const ComponenteDesplegableInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError}) => {
    
//     const validacion = (e) => {
//         if(e.target.value === 'Seleccione una opcion'){
//             cambiarEstado({...estado, valido: 'false'});
//         }
//         else{
//             cambiarEstado({...estado, valido: 'true'});
//         } 
//     }

//     const onChange = (e) => {
//         cambiarEstado({ ...estado, campo: e.target.value, valido: 'true' });
//     };
    
//     return (
//         <React.Fragment>
//             <Label htmlFor={name} valido={estado.valido}>{label}</Label>
//             <GrupoInput>
//             <Select 
//                 type={tipo} 
//                 id={name}
//                 value={estado.campo} 
//                 placeholder={placeholder}
//                 onBlur={validacion}
//                 onChange={onChange}
//                 valido={estado.valido}>
//                 <option value="" disabled selected>Seleccione una opcion</option>
//                 <option value="mañana">Mañana</option>
//                 <option value="tarde">Tarde</option>
//                 <option value="noche">Noche</option>
//             </Select>
//             </GrupoInput>
//         </React.Fragment>
//     );
// }

// const ComponenteNyAP = ({
//     estado, 
//     cambiarEstado, 
//     label, 
//     placeholder, 
//     name, 
//     expresionRegular,
//     funcion,
//     textoTooltip
// }) => {
//     const [touched, setTouched] = useState(false);

//     const onChange = (e) => {
//         setTouched(true);
//         cambiarEstado({...estado, campo: e.target.value});
//     }

//     const validacion = () => {
//         if(touched) { // solo validar si el campo fue tocado 
//             if(expresionRegular){
//                 if(expresionRegular.test(estado.campo)){
//                     cambiarEstado({...estado, valido: 'true'});
//                 } else {
//                     cambiarEstado({...estado, valido: 'false'});
//                 } 
//             }
//             if(funcion) funcion();
//         }
//     }

//     return (
//         <React.Fragment>
//             <Label htmlFor={name} valido={estado.valido}>{label}</Label> 
//             <GrupoInput>
//                 {textoTooltip && (
//                     <CustomTooltip 
//                         title={
//                             <React.Fragment>
//                                 {formateoTextoTooltip(textoTooltip)}
//                             </React.Fragment>
//                         }
//                         placement="right"
//                         arrow
//                         open={estado.valido === "false"}
//                     >
//                         <Input 
//                             type="text"
//                             placeholder={placeholder}
//                             id={name}
//                             value={estado.campo}
//                             onChange={onChange}
//                             onBlur={validacion}
//                             valido={estado.valido}
//                         />
//                     </CustomTooltip>
//                 )}
//                 {!textoTooltip && (
//                     <Input 
//                         type="text"
//                         placeholder={placeholder}
//                         id={name}
//                         value={estado.campo}
//                         onChange={onChange}
//                         onBlur={validacion}
//                         valido={estado.valido}
//                     />
//                 )}
//             </GrupoInput>
//         </React.Fragment>
//     );
// };

// const ComponenteOtro = ({
//     estado, 
//     cambiarEstado, 
//     tipo, 
//     label, 
//     placeholder, 
//     name, 

//     expresionRegular,
//     funcion,
//     textoTooltip
// }) => {
//     const [mostrarPassword, setMostrarPassword] = useState(false);
//     const [touched, setTouched] = useState(false);

//     const onChange = (e) => {
//         setTouched(true);
//         cambiarEstado({...estado, campo: e.target.value});
//     }

//     const validacion = () => {
//         if(touched) { // solo validar si el campo fue tocado 
//             if(expresionRegular){
//                 if(expresionRegular.test(estado.campo)){
//                     cambiarEstado({...estado, valido: 'true'});
//                 } else {
//                     cambiarEstado({...estado, valido: 'false'});
//                 } 
//             }
//             if(funcion) funcion();
//         }
//     }

//     return (
//         <React.Fragment>
//             <Label htmlFor={name} valido={estado.valido}>{label}</Label> 
//             <GrupoInput>
//                 {textoTooltip && (
//                     <CustomTooltip 
//                         title={
//                             <React.Fragment>
//                                 {formateoTextoTooltip(textoTooltip)}
//                             </React.Fragment>
//                         }
//                         placement="right"
//                         arrow
//                         disableHoverListener
//                     >
//                         <Input 
//                             type={mostrarPassword ? "text" : tipo} 
//                             placeholder={placeholder}
//                             id={name}
//                             value={estado.campo}
//                             onChange={onChange}
//                             onBlur={validacion}
//                             valido={estado.valido}
//                         />
//                     </CustomTooltip>
//                 )}
//                 {!textoTooltip && (
//                     <Input 
//                         type={mostrarPassword ? "text" : tipo}
//                         placeholder={placeholder}
//                         id={name}
//                         value={estado.campo}
//                         onChange={onChange}
//                         onBlur={validacion}
//                         valido={estado.valido}
//                     />
//                 )}
//                 {tipo === "password" && (
//                     <IconoPassword onClick={() => setMostrarPassword(!mostrarPassword)}>
//                         {mostrarPassword ? 
//                             <EyeOff size={20} color="#555"/> : 
//                             <Eye size={20} color="#555"/>
//                         }
//                     </IconoPassword>
//                 )}
//             </GrupoInput>
//         </React.Fragment>
//     );
// };

// export {ComponenteDesplegableInput, ComponenteNyAP, ComponenteOtro};

import React, { useState } from "react";
import { Input, Label, GrupoInput, Select, IconoPassword } from "./../elementos/formularios";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Eye, EyeOff } from 'lucide-react';

const TooltipPersonalizado = styled(({ className, ...props }) => (
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

const formatearTextoTooltip = (texto) => {
    return texto.split("\n").map((renglon, indice) => (
        <span key={indice}>{renglon}<br /></span>
    ));
};

const ComponenteBaseInput = ({
    estado,
    cambiarEstado,
    tipo = "text",
    label,
    placeholder,
    name,
    expresionRegular,
    funcion,
    textoTooltip,
    comportamientoTooltip = "error" // "error" | "siempre" | "nunca"
}) => {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [campoTocado, setCampoTocado] = useState(false);

    const manejarCambio = (e) => {
        setCampoTocado(true);
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validarCampo = () => {
        if (campoTocado) {
            if (expresionRegular) {
                const esValido = expresionRegular.test(estado.campo);
                cambiarEstado({ ...estado, valido: esValido ? 'true' : 'false' });
            }
            if (funcion) funcion();
        }
    }

    const tipoInput = tipo === "password" ? (mostrarPassword ? "text" : "password") : tipo;

    const renderizarInput = () => (
        <Input
            type={tipoInput}
            placeholder={placeholder}
            id={name}
            value={estado.campo}
            onChange={manejarCambio}
            onBlur={validarCampo}
            valido={estado.valido}
        />
    );

    const obtenerConfiguracionTooltip = () => {
        switch (comportamientoTooltip) {
            case "error":
                return {
                    open: estado.valido === "false" && campoTocado,
                    disableHoverListener: true
                };
            case "siempre":
                return {
                    disableHoverListener: true
                };
            case "nunca":
                return {
                    open: false,
                    disableHoverListener: true
                };
            default:
                return {
                    open: false,
                    disableHoverListener: true
                };
        }
    };

    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                {textoTooltip ? (
                    <TooltipPersonalizado
                        title={<React.Fragment>{formatearTextoTooltip(textoTooltip)}</React.Fragment>}
                        placement="right"
                        arrow
                        {...obtenerConfiguracionTooltip()}
                    >
                        {renderizarInput()}
                    </TooltipPersonalizado>
                ) : (
                    renderizarInput()
                )}
                {tipo === "password" && (
                    <IconoPassword onClick={() => setMostrarPassword(!mostrarPassword)}>
                        {mostrarPassword ?
                            <EyeOff size={20} color="#555" /> :
                            <Eye size={20} color="#555" />
                        }
                    </IconoPassword>
                )}
            </GrupoInput>
        </React.Fragment>
    );
};

const ComponenteNyAP = (props) => (
    <ComponenteBaseInput {...props} comportamientoTooltip="error" />
);

const ComponenteOtro = (props) => (
    <ComponenteBaseInput {...props} comportamientoTooltip="siempre" />
);

const ComponenteDesplegableInput = ({estado, cambiarEstado, tipo, label, placeholder, name}) => {
    const validarSeleccion = (e) => {
        cambiarEstado({
            ...estado,
            valido: e.target.value === 'Seleccione una opcion' ? 'false' : 'true'
        });
    }

    const manejarCambio = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value, valido: 'true' });
    };

    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Select
                    type={tipo}
                    id={name}
                    value={estado.campo}
                    placeholder={placeholder}
                    onBlur={validarSeleccion}
                    onChange={manejarCambio}
                    valido={estado.valido}
                >
                    <option value="" disabled selected>Seleccione una opcion</option>
                    <option value="mañana">Mañana</option>
                    <option value="tarde">Tarde</option>
                    <option value="noche">Noche</option>
                </Select>
            </GrupoInput>
        </React.Fragment>
    );
}

export { ComponenteDesplegableInput, ComponenteNyAP, ComponenteOtro };