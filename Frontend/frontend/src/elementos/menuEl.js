import styled from 'styled-components';

const DivMenu = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 20px;
  justify-items: center;
  position: relative;

  .contenedor-botones {
    grid-row: 2 / 3;
    display: flex;
    gap: 20px;
  }

  .salir {
    grid-row: 3 / 4;
    justify-self: end;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const BotonMenu = styled.button`
  background-color: #d3d3d3;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #ccc;
  }
`;

const ImgMenu = styled.img`
  width: 420px;
  height: auto;
  grid-row: 1 / 2;
  justify-self: center;
`;

export { DivMenu, BotonMenu, ImgMenu };
