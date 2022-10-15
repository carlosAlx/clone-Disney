import styled from "styled-components";

const Button = styled.a`
  background: #6421ff;
  color: #ffffff;
  font-weight: normal;
  font-size: 1.09rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  padding: 1rem 3rem;
`;

const Img = styled.img`
  padding: 0.9rem 0 2rem 0;
  width: 20rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
`;
const Img__icon = styled.img`
  padding-bottom: 2rem;
  width: 17rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 5rem;
  }
`;
const Banner__container = styled.div`
  position: relative;
  width: 100%;
  height: 56rem;
  background-image: url("./src/assets/img/original.jpg");
  background-size: cover;
  align-items: center;
  display: flex;
`;
const Banner__text = styled.div`
  padding: 7rem;
  display: block;
  justify-content: center;
  text-align: center;
`;
const Title__banner = styled.h2`
  font-size: 1.55rem;
  color: #ffffff;
`;

export function Banner() {
  return (
    <section>
      <Banner__container>
        <Banner__text>
          <Img src="./src/assets/img/disney_logo.svg" alt="" />
          <Title__banner>As melhores histórias em um só lugar.</Title__banner>
          <div className="set">
            <div className="container__img">
              <Img__icon src="./src/assets/img/combo.png" alt="" />
              <Button href="">Assine Agora</Button>
            </div>
            <div className="container__img">
              <Img__icon src="./src/assets/img/starplay.png" alt="" />
              <Button href="">Assine Agora</Button>
            </div>
          </div>
          <div className="link__assinatura">
            <a href="">Assinar somente o Disney+ mensal</a>
            <a href="">Assinar somente o Disney+ anual</a>
          </div>
        </Banner__text>
      </Banner__container>
    </section>
  );
}
