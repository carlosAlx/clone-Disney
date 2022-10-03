import styled from "styled-components";

const Title__plano = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
`;

const Price = styled.p`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;

const Text__plano = styled.p`
  color: #ffffff;
`;
const Container__planos = styled.div`
  display: flex;
  padding: 0 5rem;
`;

export function Planos() {
  return (
    <section>
      <Title__plano>Escolha seu plano</Title__plano>
      <Container__planos>
        <div>
          <Price>R$ 27,90/mês*</Price>
          <Text__plano>
            No Disney+ você encontra as últimas estreias do cinema, originais e
            clássicos inesquecíveis.
          </Text__plano>
        </div>
        <div>
          <Price>R$ 45,90/mês*</Price>
          <Text__plano>
            Assine Disney+ e Star+ juntos. Economize e aproveite agora os dois
            serviços por um preço único.
          </Text__plano>
        </div>
        <div>
          <Price>R$ 55,90/mês*</Price>
          <Text__plano>
            Disney+, Star+ e STARZPLAY em um plano especial. Assine agora os
            três serviços juntos.
          </Text__plano>
        </div>
      </Container__planos>
    </section>
  );
}
