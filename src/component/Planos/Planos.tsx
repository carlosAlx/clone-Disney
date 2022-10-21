import {
  Title__plano,
  Card__plano,
  Container__planos,
  Button__plano,
  Price,
  Text__plano,
  Text__min,
  Icon__planos,
  Back__plano,
} from "./style";

export function Planos() {
  return (
    <>
      <Title__plano>Escolha seu plano</Title__plano>
      <Container__planos>
        <Card__plano>
          <Icon__planos src="./img/logo.png" alt="" />
          <Price>R$ 27,90/mês*</Price>
          <Text__plano>
            No Disney+ você encontra as últimas estreias do cinema, originais e
            clássicos inesquecíveis.
          </Text__plano>
          <Button__plano href="">assine agora</Button__plano>
        </Card__plano>
        <Card__plano>
          <Back__plano>
            <Icon__planos src="./img/combo.png" alt="" />
            <Price>R$ 45,90/mês*</Price>
            <Text__plano>
              Assine Disney+ e Star+ juntos. Economize e aproveite agora os dois
              serviços por um preço único.
            </Text__plano>
          </Back__plano>
          <Button__plano href="">assine agora</Button__plano>
        </Card__plano>
        <Card__plano>
          <Icon__planos src="./img/starplay.png" alt="" />
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
    </>
  );
}
