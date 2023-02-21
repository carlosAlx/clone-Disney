import styled from "styled-components";
import { Title } from "@/styles/global";
import { Container, Icon, Dispositivo, List } from "./style";
import Tv from "@/assets/img/tv.png";
import Game from "@/assets//img/game.png";
import Tablet from "@/assets/img/tablet.png";
import Pc from "@/assets/img/pc.png";


export function Dispositivos() {
  return (
    <>
      <Title className="text-center">
        Disponível nos seus dispositivos favoritos
      </Title>
      <Container>
        <List className="lista">
          <li>
            <Icon src={Pc} alt="pc" />
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
            <Icon src={Tv} alt="Tv" />
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
            <Icon src={Game} alt="" />
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
            <Icon src={Tablet} alt="tablet" />
          </li>
          <li>
            <Dispositivo>Celulares e tablets</Dispositivo>
          </li>
          <li>Tablets Amazon Fire</li>
          <li>Celulares e Tablets Android</li>
          <li>iPhone e iPad</li>
        </List>
      </Container>
    </>
  );
}
