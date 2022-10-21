import styled from "styled-components";
import { GlobalStyle, Button } from "../../styles/global";

export const Img = styled.img`
  padding: 0.9rem 0 2rem 0;
  width: 20rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
`;
export const Img__icon = styled.img`
  padding-bottom: 2rem;
  width: 17rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 5rem;
  }
`;
export const Banner__container = styled.div`
  position: relative;
  width: 100%;
  height: 56rem;
  background-image: url("./img/original.jpg");
  background-size: cover;
  align-items: center;
  display: flex;
`;
export const Banner__text = styled.div`
  padding: 7rem;
  display: block;
  justify-content: center;
  text-align: center;
`;
export const Title__banner = styled.h2`
  font-size: 1.55rem;
`;
