import styled, { css } from "styled-components";
import { Card } from "./Card";
import { Component, useEffect, useRef, useState } from "react";

let listImg = [
  "desencatada",
  "willow",
  "lobisomem",
  "spidey",
  "santa",
  "semlimites",
];

type PropUnder = {
  aUnderline: boolean;
};

let listUnder = [true, false, false];
const menuName = [
  { id: 0, name: "em breve", under: true },
  { id: 1, name: "mais populares", under: false },
  { id: 2, name: "Louise Nevelson", under: false },
];

const Button__underlined = styled.a`
  font-size: 1.2rem;
  padding: 1rem;
  text-transform: uppercase;
  color: #ffff;
  cursor: pointer;
  text-decoration: ${(props: PropUnder) =>
    props.aUnderline ? "underline" : "none"};
`;

export function AnyCard() {
  const [img, setImg] = useState(listImg);
  const [underlined, setUnderlined] = useState(true);
  const [menuClick, setMenuclick] = useState();
  const [toogle, setToogle] = useState("");

  useEffect(() => {}, []);
  /*        <Button__underlined
          aUnderline={false}
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
        </Button__underlined>
        <Button__underlined
          aUnderline={true}
          onClick={() => {
            setImg(["red", "cavaleiro", "obiwan", "bluey", "sqn", "dr"]);
          }}
        >
          mais populares
        </Button__underlined> */
  const alterUnder = () => {};

  return (
    <section>
      <div className="menus">
        <Button__underlined
          id="breve"
          aUnderline={underlined}
          onClick={(e) => {
            setImg(["libertadores", "simp", "league", "karda", "bel", "nba"]);
            setUnderlined((state) => !state);
          }}
        >
          em breve
        </Button__underlined>
        <Button__underlined
          aUnderline={underlined}
          onClick={() => {
            setImg([
              "desencatada",
              "willow",
              "lobisomem",
              "spidey",
              "santa",
              "semlimites",
            ]);
            setUnderlined((state) => !state);
          }}
        >
          em breve
        </Button__underlined>
        <Button__underlined
          aUnderline={underlined}
          onClick={(underlined) => {
            setImg(["red", "cavaleiro", "obiwan", "bluey", "sqn", "dr"]);
            setUnderlined((state) => !state);
          }}
        >
          mais populares
        </Button__underlined>
      </div>
      <Card imgName={img} />
    </section>
  );
}
