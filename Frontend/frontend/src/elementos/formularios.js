import styled, {css} from "styled-components";

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto auto;
  gap: 25px;
  align-items: center;

  /* Asegura que el último div (los botones) ocupe las dos columnas */
  & > div:last-of-type {
    grid-column: span 2;
    justify-self: end; /* Alinea el contenedor de botones a la derecha */
  }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    ${props => props.valido === 'false' && css`
      color: ${colores.error} !important;
    `}
    user-select: none;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: white;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 2px solid transparent;

    &:focus {
        border: 2px solid ${colores.borde};
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 117, 255, 0.1);
    }

    ${props => props.valido === 'true' && css`
      border: 2px solid transparent;
      `}
    ${props => props.valido === 'false' && css`
      border: 2px solid ${colores.error} !important;
      animation: shake 0.5s; // Aquí se aplica la animación
    `}

    @keyframes shake {
        0% { transform: translate(0); }
        25% { transform: translate(-5px); }
        50% { transform: translate(5px); }
        75% { transform: translate(-5px); }
        100% { transform: translate(0); }
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
`;

const DivTextoCampoObligatorio = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%; 
  padding: 5px;
  margin-top: 5px;

  p {
    color: red;
    font-size: 14px;
  }
`;

const DivBotonesSC = styled.div`
  display: flex;
  gap: 10px;
`;

const BotonSC = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #0075FF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #005BB5;
  }

  &:focus {
    outline: 2px solid #1114;
    outline-offset: 2px;
  }

  &:active {
    background-color: #004494;
    transform: scale(0.98);
  }
`;

const Select = styled.select`
  width: 100%;
  background: white;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${colores.borde};
    outline: none;
    box-shadow: 2px 0px 30px rgba(163, 163, 163, 0.4);
  }
    // Estilo cuando la validación es positiva
  ${props => props.valido === 'true' && css`
    border: 2px solid transparent;
  `}

  // Estilo cuando la validación es negativa
  ${props => props.valido === 'false' && css`
    border: 2px solid ${colores.error} !important;
    animation: shake 0.5s; // Aplicar la animación de sacudida
  `}
`;

const FilaCompletaCheckbox = styled.div`
  grid-column: 1 / -1; 
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  margin-top: -20px;
  font-size: 13px;

  input {
    margin-right: 5px;
  }
`;

const IconoPassword = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 100;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 50%;
    user-select: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: translateY(-50%) scale(1.1);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }
`;


export {Formulario, Label, GrupoInput, Input, LeyendaError, DivTextoCampoObligatorio, DivBotonesSC, Select, BotonSC, FilaCompletaCheckbox, IconoPassword};