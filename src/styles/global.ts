import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
    p, h1, h2 {
      margin: 0;
    }
    html {
    @media (min-width: 1600px) {
      font-size: 100%;
    }
    @media (max-width: 1400px) {
      font-size: 93.75%;
    }
    @media (max-width: 1366px) {
      font-size: 83.5%;
    }
    @media (max-width: 1280px) {
      font-size: 75%;
    }
    @media (max-width: 1024px) {
      font-size: 70%;
    }
    @media (max-width: 900px) {
      font-size: 60%;
    }
    @media (max-width: 600px) {
      font-size: 58.75%;
    }
  }
  body {
    background-color: #FFFFFF;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
