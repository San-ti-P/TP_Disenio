// import React, {useState} from "react";
// import {Input, Label, GrupoInput, Select, LeyendaError, FilaCompletaCheckbox, IconoPassword} from "./../elementos/formularios";
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
//             <LeyendaError>{leyendaError}</LeyendaError>
//         </React.Fragment>
//     );
// }

// const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion, textoTooltip}) => {
//     const [mostrarPassword, setMostrarPassword] = useState(false);
//     const [touched, setTouched] = useState(false);

//     const onChange = (e) => {
//         setTouched(true);
//         cambiarEstado({...estado, campo: e.target.value});
//     }

//     const validacion = () => {
//         if(touched) {//solo validar si el campo fue tocado 
//             if(expresionRegular){
//                 if(expresionRegular.test(estado.campo)){
//                     cambiarEstado({...estado, valido: 'true'});
//                 } else {
//                     cambiarEstado({...estado, valido: 'false'});
//                 } 
//             }
//             if(funcion){
//                 funcion();
//             }
//         }
//     }

//     const formateoTextoTooltip = () => {
//         return textoTooltip.split("\n").map((renglon, indice) => (
//             <span key={indice}>{renglon}<br /></span>
//         ));
//     };

//     return (
//         <React.Fragment>
//             <Label htmlFor={name} valido={estado.valido}>{label}</Label> 
//             <GrupoInput>
//                 {textoTooltip ?  (
//                     <CustomTooltip 
//                         title={
//                             <React.Fragment>
//                                 {formateoTextoTooltip()}
//                             </React.Fragment>
//                         }
//                         placement="right"
//                         arrow
//                         disableHoverListener>
//                         <Input 
//                             type={mostrarPassword ? "text" : tipo} 
//                             placeholder={placeholder}
//                             id={name}
//                             value={estado.campo}
//                             onChange={onChange}
//                             // onKeyUp={validacion}
//                             onBlur={validacion}
//                             valido={estado.valido}
//                         />
//                     </CustomTooltip>

//                 ) : (
//                     <Input 
//                         type={mostrarPassword ? "text" : tipo}
//                         placeholder={placeholder}
//                         id={name}
//                         value={estado.campo}
//                         onChange={onChange}
//                         // onKeyUp={validacion}
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
//             <LeyendaError>{leyendaError}</LeyendaError>
//         </React.Fragment>
//     );
// };

// export {ComponenteInput, ComponenteDesplegableInput};



import React, {useState} from "react";
import {Input, Label, GrupoInput, Select, LeyendaError, FilaCompletaCheckbox, IconoPassword} from "./../elementos/formularios";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Eye, EyeOff } from 'lucide-react';

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
                value={estado.campo} 
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

const ComponenteInput = ({
    estado, 
    cambiarEstado, 
    tipo, 
    label, 
    placeholder, 
    name, 
    leyendaError,
    expresionRegular,
    funcion,
    textoTooltip
}) => {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [touched, setTouched] = useState(false);

    const onChange = (e) => {
        setTouched(true);
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(touched) { // solo validar si el campo fue tocado 
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
                {textoTooltip && (
                    <CustomTooltip 
                        title={
                            <React.Fragment>
                                {formateoTextoTooltip()}
                            </React.Fragment>
                        }
                        placement="right"
                        arrow
                        // disableHoverListener --> Para id usuario y contrasenia
                        // open = {estado.valido === "false"} --> Para nombre y apellido
                    >
                        <Input 
                            type={mostrarPassword ? "text" : tipo} 
                            placeholder={placeholder}
                            id={name}
                            value={estado.campo}
                            onChange={onChange}
                            onBlur={validacion}
                            valido={estado.valido}
                        />
                    </CustomTooltip>
                )}
                {!textoTooltip && (
                    <Input 
                        type={mostrarPassword ? "text" : tipo}
                        placeholder={placeholder}
                        id={name}
                        value={estado.campo}
                        onChange={onChange}
                        onBlur={validacion}
                        valido={estado.valido}
                    />
                )}
                {tipo === "password" && (
                    <IconoPassword onClick={() => setMostrarPassword(!mostrarPassword)}>
                        {mostrarPassword ? 
                            <EyeOff size={20} color="#555"/> : 
                            <Eye size={20} color="#555"/>
                        }
                    </IconoPassword>
                )}
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </React.Fragment>
    );
};

export {ComponenteDesplegableInput, ComponenteInput};