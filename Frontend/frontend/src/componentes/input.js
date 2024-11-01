import React, { useState, useRef } from "react";
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
    comportamientoTooltip = "error" // "error" | "siempre" | "nunca"
}) => {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [campoTocado, setCampoTocado] = useState(false);

    // Referencia para el input
    const inputRef = useRef(null);

    const validarCampo = (e) => {
        const siguienteElemento = e.relatedTarget;

        // Realizamos la validación solo si el campo fue tocado y el siguiente elemento no es un botón 
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
        cambiarEstado({ ...estado, campo: e.target.value });
        if (funcion) funcion();
    }

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
            onKeyUp={tipo === "password" ? validarCampo : null}
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
                        // title = {textoTooltip}
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
    <ComponenteBaseInput {...props} />
);

const ComponenteOtro = (props) => (
    <ComponenteBaseInput {...props}  />
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
                    <option value="" disabled>Seleccione una opcion</option>
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noche">Noche</option>
                </Select>
            </GrupoInput>
        </React.Fragment>
    );
}

export { ComponenteDesplegableInput, ComponenteNyAP, ComponenteOtro };