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


  html {
    @media (max-width: 4000px) {
      font-size: 100%;
    }

    @media (max-width: 1600px) {
      font-size: 83.75%;
    }

    @media (max-width: 1380px) {
      font-size: 75%;
    }

    @media (max-width: 1280px) {
      @media (min-height: 830px) {
        font-size: 93.75%;
      }
    }

    @media (max-width: 1230px) {
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
    background-color: #F3F3F3;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

  body, button, input, textarea {
    font-family: 'Hind Siliguri', sans-serif;
    font-style: normal;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
