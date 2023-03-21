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

    @media (min-width: 1700px) {
      font-size: 100%;
    }
    @media (min-width: 1350px) {
      font-size: 80%;
    }
    @media (max-width: 1280px) {
    @media (min-height: 830px) {
      font-size: 93.75%;
    }
  }
    @media (min-width: 900px) {
      font-size: 68%;
    }
    @media (max-width: 700px) {
      font-size: 60%;
    }
    @media (max-width: 500px) {
      font-size: 50%;
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
