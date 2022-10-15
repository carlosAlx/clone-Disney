import styled from "styled-components";

const Title__plano = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
`;

const Price = styled.p`
  font-size: 1.7rem;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
`;

const Text__plano = styled.p`
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  padding: 0 2.5rem;
`;

const Container__planos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  justify-content: center;
`;

const Card__plano = styled.div`
  width: 24rem;
  margin: 0 auto;
  display: grid;
`;

const Back__plano = styled.div`
  background-image: url(../src/assets/img/card_plano.png);
  background-size: contain;
  background-repeat: no-repeat;
`;

const Section = styled.section``;
const Icon__planos = styled.img`
  padding-top: 3rem;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
`;

const Button__plano = styled.a`
  background: #6421ff;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0.2rem 3rem;
`;
const Text__min = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;

export function Planos() {
  return (
    <Section>
      <Title__plano>Escolha seu plano</Title__plano>
      <Container__planos>
        <Card__plano>
          <Icon__planos src="../src/assets/img/logo.png" alt="" />
          <Price>R$ 27,90/mês*</Price>
          <Text__plano>
            No Disney+ você encontra as últimas estreias do cinema, originais e
            clássicos inesquecíveis.
          </Text__plano>
          <Button__plano href="">assine agora</Button__plano>
        </Card__plano>
        <Card__plano>
          <Back__plano>
            <Icon__planos src="../src/assets/img/combo.png" alt="" />
            <Price>R$ 45,90/mês*</Price>
            <Text__plano>
              Assine Disney+ e Star+ juntos. Economize e aproveite agora os dois
              serviços por um preço único.
            </Text__plano>
          </Back__plano>
          <Button__plano href="">assine agora</Button__plano>
        </Card__plano>
        <Card__plano>
          <Icon__planos src="../src/assets/img/starplay.png" alt="" />
          <Price>R$ 55,90/mês*</Price>
          <Text__plano>
            Disney+, Star+ e STARZPLAY em um plano especial. Assine agora os
            três serviços juntos.
          </Text__plano>
          <Button__plano href="">assine agora</Button__plano>
        </Card__plano>
      </Container__planos>
      <Text__min>
        *O preço pode variar caso a assinatura seja feita através de outras
        plataformas.
      </Text__min>
    </Section>
  );
}
