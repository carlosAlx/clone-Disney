import styled from "styled-components";

const Button = styled.a`
  background: #6421ff;
  padding: 1.3rem 14rem;
  color: #ffffff;
  font-weight: normal;
  font-size: 1.09rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
`;

const Logo = styled.img`
  padding: 0.9rem 0 2rem 0;
  width: 20rem;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
`;
const Banner__container = styled.div`
  position: relative;
  width: 100%;
  height: 46.85rem;
  background-image: url("src/assets/img/original.jpg");
  background-size: cover;
  align-items: center;
  display: flex;
`;
const Banner__text = styled.div`
  padding: 7rem;
  display: grid;
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
          <Title__banner>As melhores histórias em um só lugar.</Title__banner>
          <Logo src="src/assets/img/disney_logo.svg" alt="" />
          <Button href="">Escolha seu plano</Button>
        </Banner__text>
      </Banner__container>
    </section>
  );
}
