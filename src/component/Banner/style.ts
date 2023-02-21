import styled from "styled-components";
import Banner from "@/assets/img/original.jpg";

export const Img = styled.img`
  padding: 0.9rem 0 2rem 0;
  width: 20rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
`;
export const Img__icon = styled.img`
  width: 17rem;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
`;
export const Banner__container = styled.div`
  position: relative;
  width: 100%;
  height: 56rem;
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;

  @media (max-width: 1024px) {
    height: 35rem;
  }
`;
export const Banner__text = styled.div`
  flex-basis: 25%;
  padding: 7rem;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 2rem;
    flex-basis: 50%
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    flex-basis: 90%
  }
`;
export const Title__banner = styled.h2`
  font-size: 1.55rem;
`;
