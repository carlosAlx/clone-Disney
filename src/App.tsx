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
import Mandalorian from "@/assets/img/Mand.png";
import Rei_leao from "@/assets/img/rei.png";

const Section__blog = styled.div`
  display: flex;
  margin: auto;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Container__img = styled.div`
  flex-basis: 50%;
  color: #ffffff;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Container__text = styled.div`
  flex-basis: 45%;
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
  background-image: url(${Rei_leao});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    height: 30rem;
  }
`;

function App() {
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
              <Img src={Mandalorian} alt="mandalorian" />
            </Container__img>
            <Container__text>
              <article>
                <Title>Assista do seu jeito</Title>
                <Text>
                  Aproveite a tela grande da TV ou assista no tablet, laptop,
                  celular e outros aparelhos. Nossa seleção de títulos em 4K não
                  para de crescer. Além disso, para a felicidade de todos, é
                  possível assistir em até 4 telas ao mesmo tempo.
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
                  <Title>Baixe filmes e séries</Title>
                  <Text>
                    Baixe e assista quando e onde quiser. Assim, seus favoritos
                    estão sempre com você, até mesmo sem internet.
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
