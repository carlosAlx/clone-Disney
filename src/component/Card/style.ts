import styled from "styled-components";

export const Card__img = styled.img`
  width: 32%;
  border-radius: 0.3rem;
  margin: 1rem auto;
  object-fit: contain;

  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
`;
export const Container__card = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

type PropUnderline = {
  aUnderline?: boolean;
};

export const Button__underlined = styled.a<PropUnderline>`
  font-size: 1.2rem;
  padding: 1rem;
  text-transform: uppercase;
  color: #ffff;
  cursor: pointer;
  text-decoration: ${(props) => props.aUnderline ? "underline" : "none"};
`;
