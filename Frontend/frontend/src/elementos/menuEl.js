import styled from 'styled-components';

const DivMenu = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 20px;
  justify-content: center;
  align-items: center;
  `;

const BotonMenu = styled.button`
  background-color: #d3d3d3;
  border: 2px solid #black;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  
  &:hover {
    background-color: #ccc;
  }
`;

const ImgMenu = styled.img`
  width: 420px;
  height: auto;
  grid-row-start: 1;
  grid-row-end: 7;
  grid-column-start: 2;
  grid-column-end: 3;
`;

export {BotonMenu, DivMenu, ImgMenu};