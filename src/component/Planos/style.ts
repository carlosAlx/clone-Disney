import styled from "styled-components";
import { Button, Text } from "../../styles/global";

export const Title__plano = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
`;

export const Text__plano = styled(Text)`
  text-align: center;
  padding: 0 2.5rem;
  font-size: 1.18rem;
`;

export const Container__planos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  justify-content: center;
`;

export const Card__plano = styled.div`
  width: 24rem;
  margin: 0 auto;
  display: grid;
`;

export const Back__plano = styled.div`
  background-image: url("./img/card_plano.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Icon__planos = styled.img`
  padding-top: 3rem;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
`;

export const Button__plano = styled(Button)`
  padding: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0.2rem 3rem;
`;
export const Text__min = styled.p`
  padding-top: 5rem;
  font-size: 0.8rem;
  text-align: center;
`;
