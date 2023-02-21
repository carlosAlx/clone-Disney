import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
      
  }
  :root {
    --background-color-body: #040714;
    --background-color-button: #6421ff;
    --color-white: #ffff;
    --color-silver: silver;
  }
  body {
    margin: 0;
    -webkit-text-size-adjust: 100%;
    background-color: var(--background-color-body);
  }
  html {
    font-size: 16px;   
    -webkit-text-size-adjust: 100%;
    line-height: 28px;
    color: var(--color-white);
    letter-spacing: .2px;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  section {
    margin-top: 4rem;
  }
  footer {
    text-align: center;
    font-size: .7rem;
    width: 100%;
  }
  a {
    text-decoration: inherit;
  }
  &.text-center { 
    text-align: center;
  }
  &.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    justify-content: space-evenly;
  }
`;
export const Img = styled.img`
  max-widh: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;
export const Text = styled.p`
  color: var(--color-silver);
  font-size: 1.2rem;
`;
export const Button = styled.a`
  background: var(--background-color-button);
  color: var(--color-white);
  font-size: 1.18rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  padding: 1rem 3rem;
  text-decoration: inherit;
  text-align: center;
  display: flex;
`;

export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 7rem;

  @media (max-width: 1080px) {
    padding: 0;
    margin: 0;
  }
`;
