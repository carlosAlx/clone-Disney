import styled from "styled-components";
import { Cardp } from "./Card";
import {
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { render } from "react-dom";
let listImg = [
  "desencatada",
  "willow",
  "lobisomem",
  "spidey",
  "santa",
  "semlimites",
];

export function AnyCard() {
  const [img, setImg] = useState(listImg);
  const [text, setText] = useState("breve");

  useEffect(() => {
    img;
  }, [img]);

  console.log(img);

  function mais() {}
  return (
    <section>
      <div className="menus">
        <a
          onClick={() => {
            setImg([
              "desencatada",
              "willow",
              "lobisomem",
              "spidey",
              "santa",
              "semlimites",
            ]);
          }}
        >
          em breve
        </a>
        <a
          onClick={() => {
            setImg(["red", "cavaleiro", "obiwan", "bluey", "sqn", "dr"]);
          }}
        >
          mais populares
        </a>
        <a
          onClick={() => {
            setImg(["libertadores", "simp", "league", "karda", "bel", "nba"]);
          }}
        >
          mais no star+
        </a>
      </div>
      <Cardp imgName={img} />
    </section>
  );
}
