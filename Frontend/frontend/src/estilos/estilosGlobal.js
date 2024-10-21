import { createGlobalStyle } from 'styled-components';

const EstilosGlobal = createGlobalStyle`
  /* Fuente Roboto, 400 y 700 bold */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: #ccc8;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    max-height: 670px;
    max-width: 700px;
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e5e5e5;
    padding: 20px;
    box-shadow: 1px 1px 30px #3339;
    border-radius: 8px;
  }
`;

export default EstilosGlobal;
