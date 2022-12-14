import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Banner } from "./component/Banner/Banner";
import { Planos } from "./component/Planos/Planos";
import { Dispositivos } from "./component/Dispositivos/Dispositivos";
import { Footer } from "./component/Footer/Footer";
import { Questions } from "./component/Duvidas/Questions";
import { AnyCard } from "./component/Card/ContainerCard";
import { GlobalStyle, Img, Text, Title, Container } from "./styles/global";
import { Duvidas } from "./component/Duvidas/Duvidas";

const Section__blog = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
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
  background-image: url("./img/rei.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    height: 30rem;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("sem nome");

  return (
    <>
      <GlobalStyle />
      <main>
        <Banner />
      </main>
      <section id="card">
        <Container>
          <AnyCard />
        </Container>
      </section>
      <section id="planos">
        <Container>
          <Planos />
        </Container>
      </section>
      <section id="blog">
        <Container>
          <Section__blog>
            <Container__img>
              <Img src="./img/mand.png" alt="" />
            </Container__img>
            <Container__text>
              <article>
                <Title>Assista do seu jeito</Title>
                <Text>
                  Aproveite a tela grande da TV ou assista no tablet, laptop,
                  celular e outros aparelhos. Nossa sele????o de t??tulos em 4K n??o
                  para de crescer. Al??m disso, para a felicidade de todos, ??
                  poss??vel assistir em at?? 4 telas ao mesmo tempo.
                </Text>
              </article>
            </Container__text>
          </Section__blog>
        </Container>
      </section>
      <section id="baixar">
        <Container>
          <Section__blog>
            <Back__image>
              <Container__text className="Back__image">
                <article>
                  <Title>Baixe filmes e s??ries</Title>
                  <Text>
                    Baixe e assista quando e onde quiser. Assim, seus favoritos
                    est??o sempre com voc??, at?? mesmo sem internet.
                  </Text>
                </article>
              </Container__text>
            </Back__image>
          </Section__blog>
        </Container>
      </section>
      <section id="dispositivos">
        <Container>
          <Dispositivos />
        </Container>
      </section>

      <section className="info">
        <Container>
          <Title className="text-center">Perguntas Frequentes</Title>
          {Questions.map((Question) => (
            <Duvidas key={Question.id} {...Question} />
          ))}
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default App;
