import styled from "styled-components";
import { GlobalStyle, Text, Title } from "../../styles/global";

export const Acordion = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0.6rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Question__Contaienr = styled.div`
  row-gap: 1rem;
  background-color: #13151d;
`;

export const Question__title = styled.h3`
  color: #f9f9f9;
  font-size: 1.2rem;
  font-family: inherit;
  font-weight: lighter;
`;

export const Question = styled(Text)`
  margin: 0;
  text-align: left;
  white-space: pre-line;
  line-height: 1.2cm;
  padding: 0 2rem 1rem 2rem;
`;

export const Button__icon = styled.a`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;
