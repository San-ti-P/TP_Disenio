import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const StyledBackButton = styled.button`
  position: fixed;
  top: 30px;  // Aumentado de 20px
  left: 30px; // Aumentado de 20px
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 1000;
  &:hover {
    background-color: #1565c0;
  }
`;
const BackButton = ({ route }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <StyledBackButton onClick={handleClick}>
      <svg 
        width="30"
        height="30"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </StyledBackButton>
  );
};
export default BackButton;
 