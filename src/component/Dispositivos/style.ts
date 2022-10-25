import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  margin: 0 auto;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const List = styled.ul`
  text-align: center;
  list-style: none;
  padding-left: 0;
`;

export const Icon = styled.img`
  max-width: 100%;
  width: 25rem;
`;

export const Dispositivo = styled.h3`
  font-size: 1.5rem;
`;
