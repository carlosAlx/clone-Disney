import styled from "styled-components";

const Card__img = styled.img`
  width: 32%;
  border-radius: .3rem;
  margin: 1rem auto;
`;
const Container__breve = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5rem;
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
