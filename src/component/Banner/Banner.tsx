import styled from "styled-components";
import { GlobalStyle, Button } from "../../styles/global";
import {
  Img,
  Img__icon,
  Title__banner,
  Banner__text,
  Banner__container,
} from "./style";

export function Banner() {
  return (    
      <Banner__container>
        <Banner__text>
          <Img src="./img/disney_logo.svg" alt="" />
          <Title__banner>As melhores histórias em um só lugar.</Title__banner>
          <div className="set">
            <div className="container__img">
              <Img__icon src="./img/combo.png" alt="" />
              <Button href="">Assine Agora</Button>
            </div>
            <div className="container__img">
              <Img__icon src="./img/starplay.png" alt="" />
              <Button href="">Assine Agora</Button>
            </div>
          </div>
          <div className="link__assinatura">
            <a href="">Assinar somente o Disney+ mensal</a>
            <a href="">Assinar somente o Disney+ anual</a>
          </div>
        </Banner__text>
      </Banner__container>
  );
}
