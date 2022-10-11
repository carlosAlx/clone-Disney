import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  font-size: 2.3rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around; 
  gap: 1rem; 
`;

const List = styled.ul`
  text-align: center;
  list-style: none;
  padding-left: 0;
`;

const Icon = styled.img`
  max-width: 100%;
  width: 25rem;
`;

const Dispositivo = styled.h3`
  font-size: 1.5rem;
`;
const Section = styled.section`
  margin: 0;
`;

export function Dispositivos() {
  return (
    <section>
      <Title>Disponível nos seus dispositivos favoritos</Title>
      <Container>
        <List className="lista">
          <li>
            <Icon src="src/assets/img/pc.png" alt="" />
          </li>
          <li>
            <Dispositivo>Computador</Dispositivo>
          </li>
          <li>Chrome OS</li>
          <li>MacOS</li>
          <li>PC Windows</li>
        </List>
        <List>
          <li>
            <Icon src="src/assets/img/tv.png" alt="" />
          </li>
          <li>
            <Dispositivo>TV</Dispositivo>
          </li>
          <li>Amazon Fire TV</li>
          <li>Android TV</li>
          <li>Apple TV</li>
          <li>Chromecast</li>
          <li>TVs LG</li>
          <li>Roku</li>
          <li>Samsung</li>
        </List>
        <List>
          <li>
            <Icon src="src/assets/img/game.png" alt="" />
          </li>
          <li>
            <Dispositivo>Videogames</Dispositivo>
          </li>
          <li>PS4</li>
          <li>PS5</li>
          <li>Xbox One</li>
          <li>Xbox Series X</li>
          <li>Xbox Series S</li>
        </List>
        <List>
          <li>
            <Icon src="src/assets/img/tablet.png" alt="" />
          </li>
          <li>
            <Dispositivo>Celulares e tablets</Dispositivo>
          </li>
          <li>Tablets Amazon Fire</li>
          <li>Celulares e Tablets Android</li>
          <li>iPhone e iPad</li>
        </List>
      </Container>
    </section>
  );
}
