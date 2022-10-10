import styled from "styled-components";

const Card__img = styled.img`
  width: 32%;
  border-radius: 0.3rem;
  margin: 1rem auto;

  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
`;
const Container__breve = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export function Breve() {
  return (
    <section>
      <Container__breve>
        <Card__img src="src/assets/img/libertadores.jpg" alt="" />
        <Card__img src="src/assets/img/simp.jpg" alt="" />
        <Card__img src="src/assets/img/league.jpg" alt="" />
        <Card__img src="src/assets/img/karda.jpg" alt="" />
        <Card__img src="src/assets/img/bel.jpg" alt="" />
        <Card__img src="src/assets/img/nba.jpg" alt="" />
      </Container__breve>
    </section>
  );
}
