import React, { useState, useRef } from "react";
import { Input, Label, GrupoInput, Select, IconoPassword, LeyendaError } from "./../elementos/formularios";
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
        border: "1px solid #dadde9",
        padding: "15px",
        borderRadius: "4px",
    },
    [`& .MuiTooltip-arrow`]: {
        color: "#f5f5f5",
    },
});

const formatearTextoTooltip = (texto) => {
    const lineas = texto.split("\n");
    return lineas.map((renglon, indice) => (
        <span key={indice}>
            {renglon}
            {indice < lineas.length - 1 && <br />}
        </span>
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
    comportamientoTooltip = "error",
    leyendaError = "",
    mostrarLeyenda,
    cambiarMostrarLeyenda,
    editable = true, // Nueva prop
}) => {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [campoTocado, setCampoTocado] = useState(false);
    const inputRef = useRef(null);

    const validarCampo = (e) => {
        const siguienteElemento = e.relatedTarget;

        if (campoTocado && !(siguienteElemento && siguienteElemento.tagName === "BUTTON")) {
            if (expresionRegular) {
                const esValido = expresionRegular.test(estado.campo);
                cambiarEstado({ ...estado, valido: esValido ? 'true' : 'false' });
            }
            if (funcion) funcion();
        }
    };

    const manejarCambio = (e) => {
        setCampoTocado(true);
        if (cambiarMostrarLeyenda) cambiarMostrarLeyenda(false);

        if (editable) { // Solo cambia el estado si el input es editable
            if (name === "contraseña") {
                cambiarEstado({ ...estado, campo: e.target.value, valido: "true" });
            } else {
                cambiarEstado({ ...estado, campo: e.target.value });
            }
        }
    };

    const tipoInput = tipo === "password" ? (mostrarPassword ? "text" : "password") : tipo;

    const renderizarInput = () => (
        <Input
            ref={inputRef}
            type={tipoInput}
            placeholder={placeholder}
            id={name}
            value={estado.campo}
            onChange={manejarCambio}
            onBlur={validarCampo}
            onKeyUp={funcion && name === "confirmarContraseña" ? funcion : null}
            onFocus={funcion ? funcion : null}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                }
            }}
            valido={estado.valido}
            readOnly={!editable} // Desactiva la edición
        />
    );
    

    const obtenerConfiguracionTooltip = () => {
        switch (comportamientoTooltip) {
            case "error":
                return {
                    open: estado.valido === "false" && campoTocado,
                    disableHoverListener: true,
                };
            case "siempre":
                return {
                    disableHoverListener: true,
                };
            case "nunca":
                return {
                    open: false,
                    disableHoverListener: true,
                };
            default:
                return {
                    open: false,
                    disableHoverListener: true,
                };
        }
    };

    return (
        <React.Fragment>
            <Label htmlFor={name} valido={estado.valido}>
                {label}
            </Label>
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
                        {mostrarPassword ? <EyeOff size={20} color="#555" /> : <Eye size={20} color="#555" />}
                    </IconoPassword>
                )}
            </GrupoInput>
            {mostrarLeyenda && leyendaError !== "" && <LeyendaError>{leyendaError}</LeyendaError>}
        </React.Fragment>
    );
};



const ComponenteNyAP = (props) => (
    <ComponenteBaseInput {...props} />
);

const ComponenteOtro = (props) => (
    <ComponenteBaseInput {...props}  />
);

const ComponenteDesplegableInput = ({estado, cambiarEstado, tipo, label, placeholder, name, valorPorDefecto, valores}) => {
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
                    onChange={manejarCambio}
                    valido={estado.valido}>
                    
                    <option 
                            value="" disabled>{valorPorDefecto ? 
                            valorPorDefecto : "Seleccione una opcion"}
                    </option>
                    {
                        valores.length > 0 &&  
                        valores.map((valor) => {
                            return (
                                <option key={valor} value={valor}>{valor}</option>
                            )
                        })
                    }
                {/* 
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noche">Noche</option> */}
                </Select>
            </GrupoInput>
        </React.Fragment>
    );
}

export { ComponenteDesplegableInput, ComponenteNyAP, ComponenteOtro };