import styled from "styled-components";

const BotonEliminarReserva = styled.button`
  border: 2px solid lightgrey;
  position: relative;
  border-radius: 3px;
  font-family: arial;
  font-size: 14px;
`;

const ContenedorReservas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContenedorCalendario = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BotonVerReservas = styled.button`
  background-color: #0075FF;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const FondoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ContenidoModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  z-index: 1001;
`;

const EncabezadoModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TituloModal = styled.h2`
  margin: 0;
`;

const BotonCerrarModal = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ListaReservas = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ItemReserva = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export {
  BotonEliminarReserva, 
  ContenedorReservas, 
  ContenedorCalendario, 
  BotonVerReservas, 
  FondoModal, 
  ContenidoModal, 
  EncabezadoModal, 
  TituloModal, 
  BotonCerrarModal, 
  ListaReservas, 
  ItemReserva
};
