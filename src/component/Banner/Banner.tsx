import { Button } from "../../styles/global";
import {
  Img,
  Img__icon,
  Title__banner,
  Banner__text,
  Banner__container,
} from "./style";
import Disney_Logo from "@/assets/img/disney_logo.svg";
import Starplay_Logo from "@/assets/img/starplay.png";
import Combo from "@/assets/img/combo.png";

export function Banner() {
  return (
    <Banner__container>
      <Banner__text>
        <Img src={Disney_Logo} alt="disney_logo" />
        <Title__banner>As melhores histórias em um só lugar.</Title__banner>
        <div className="set">
          <div className="container__img">
            <Img__icon src={Combo} alt="combo" />
            <Button href="">Assine Agora</Button>
          </div>
          <div className="container__img">
            <Img__icon src={Starplay_Logo} alt="starplay_logo" />
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
