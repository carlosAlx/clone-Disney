import styled from "styled-components";

const Button = styled.a`
  background: #6421ff;
  padding: 1.3rem 14rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Logo = styled.img`
  padding: 1.5rem;
  width: 20rem;
`;
const Banner__container = styled.div`
  position: relative;
  width: 100%;
`;
const Banner__text = styled.div`
  position: absolute;
  display: grid;
  left: 6%;
  top: 20%;
  justify-items: center;
`;
const Title__banner = styled.h2`
  color: #ffffff;
`;

export function Banner() {
  return (
    <section>
      <Banner__container>
        <Img src="src/assets/img/original.jpg" alt="" />
        <Banner__text>
          <Title__banner>As melhores histórias em um só lugar.</Title__banner>
          <Logo src="src/assets/img/disney_logo.svg" alt="" />
          <Button href="">Ecolha seu plano</Button>
        </Banner__text>
      </Banner__container>
    </section>
  );
}
