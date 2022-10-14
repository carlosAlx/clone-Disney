import styled from "styled-components";
import { PropsWithRef, useState } from "react";
import { useEffect } from "react";

const Card__img = styled.img`
  width: 32%;
  border-radius: 0.3rem;
  margin: 1rem auto;

  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
`;
const Container__breve = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

type img = {
  imgName: string[];
};
export function Cardp(prop: img) {
  return (
    <Container__breve>
      {prop.imgName.map((imgName, id) => (
        <Card__img key={id} src={"src/assets/img/" + imgName + ".jpg"} alt="" />
      ))}
    </Container__breve>
  );
}
