import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-size: border-box;   
    
  }
  :root {
    --background-color: #040714;;
    --bottom-color:;
  }
  body {
    margin: 0;
    -webkit-text-size-adjust: 100%;
    background-color: var(--background-color);
  }
  html {
    font-size: 16px;
    font-family: Avenir, sans-serif;
    -webkit-text-size-adjust: 100%;
    line-height: 28px;
    letter-spacing: .2px;
    -webkit-font-smoothing: antialiased;


    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 768px) {
      font-size: 87.5%;
    }
  }
`;
