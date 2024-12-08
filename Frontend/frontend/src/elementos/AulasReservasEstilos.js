import styled from 'styled-components';

export const Contenedor = styled.div`
  display: flex;
  height: 90vh;
  //width: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const PanelIzquierdo = styled.div`
  width: 300px;
  overflow-y: auto;
  background: white;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  padding: 16px;
`;

export const PanelDerecho = styled.div`
  flex: 1;
  width: 650px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ListaAulas = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const BotonFecha = styled.button`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
  }

  &.seleccionado {
    border-color: #0070f3;
    background: #e6f0ff;
  }

  .fecha {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  .estado {
    font-size: 0.9em;
    color: ${props => props.nodisponible || !props.seleccionado ? '#bb2929' : '#666'};
  }
`;

export const CajaAdvertencia = styled.div`
  background-color: #ffeeba;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const OpcionAula = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .encabezado {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .detalles {
    margin-left: 25px;
    color: #666;
  }
`;

export const ContenedorBotones = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  background: white;
  border-top: 1px solid #ddd;
`;

