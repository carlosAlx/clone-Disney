import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import { Banner } from "./component/Banner";
import { Breve } from "./component/Breve";
import { Planos } from "./component/Planos";

const Section__jeito = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
`;
const Img = styled.img`
  max-widh: 100%;
  width: 100%;
`;
const Container__img = styled.div`
  width: 50%;
  color: #ffffff;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Container__text = styled.div`
  width: 50%;
  color: #ffffff;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function App() {
  const Container = styled.div`
    max-width: 100%;
    overflow: hidden;
    position: relative;
    padding: 0 7rem;

    @media (max-width: 1024px) {
    }
  `;
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <Container>
        <Breve />
        <Planos />
        <Section__jeito>
          <Container__img>
            <Img src="src/assets/img/mand.png" alt="" />
          </Container__img>
          <Container__text>
            <h2>Assista do seu jeito</h2>
            <p>
              Aproveite a tela grande da TV ou assista no tablet, laptop,
              celular e outros aparelhos. Nossa seleção de títulos em 4K não
              para de crescer. Além disso, para a felicidade de todos, é
              possível assistir em até 4 telas ao mesmo tempo.
            </p>
          </Container__text>
        </Section__jeito>
      </Container>
    </>
  );
}

export default App;
