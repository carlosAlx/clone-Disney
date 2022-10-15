import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Banner } from "./component/Banner";
import { Planos } from "./component/Planos";
import { Dispositivos } from "./component/Dispositivos";
import { Footer } from "./component/Footer";
import { Questions } from "./component/Questions";
import { Duvidas } from "./component/Duvidas";
import { AnyCard } from "./component/ContainerCard";

const Section__blog = styled.section`
  display: flex;
  margin: auto;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
`;
const Text = styled.p`
  font-size: 1rem;
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
  width: 45%;
  color: #ffffff;
  padding: 2rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Back__image = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url("../src/assets/img/rei.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("sem nome");

  return (
    <>
      <Banner />
      <div className="container">
        <AnyCard />
        <Planos />
        <Section__blog>
          <Container__img>
            <Img src="../src/assets/img/mand.png" alt="" />
          </Container__img>
          <Container__text>
            <Title>Assista do seu jeito</Title>
            <Text>
              Aproveite a tela grande da TV ou assista no tablet, laptop,
              celular e outros aparelhos. Nossa seleção de títulos em 4K não
              para de crescer. Além disso, para a felicidade de todos, é
              possível assistir em até 4 telas ao mesmo tempo.
            </Text>
          </Container__text>
        </Section__blog>
        <Section__blog id="baixar">
          <Back__image>
            <Container__text className="Back__image">
              <Title>Baixe filmes e séries</Title>
              <Text>
                Baixe e assista quando e onde quiser. Assim, seus favoritos
                estão sempre com você, até mesmo sem internet.
              </Text>
            </Container__text>
          </Back__image>
        </Section__blog>
        <Dispositivos />
        <section className="info">
          <Title className="text-center">Perguntas Frequentes</Title>
          {Questions.map((Question) => (
            <Duvidas key={Question.id} {...Question} />
          ))}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
