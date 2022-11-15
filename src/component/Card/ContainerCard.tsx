import styled, { css } from "styled-components";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Button__underlined } from "./style";

let listImg = [
  "desencatada",
  "willow",
  "lobisomem",
  "spidey",
  "santa",
  "semlimites",
];
type CardPageImgsProp = [
  { id: BigInteger; name: string; under: boolean; imgs: [] }
];
const CardPageImgs = [
  {
    id: 0,
    name: "em breve",
    imgs: [
      "desencatada",
      "willow",
      "lobisomem",
      "spidey",
      "santa",
      "semlimites",
    ],
  },
  {
    id: 1,
    name: "mais populares",
    imgs: ["red", "cavaleiro", "obiwan", "bluey", "sqn", "dr"],
  },
  {
    id: 2,
    name: "MAIS NO STAR+",
    imgs: ["libertadores", "simp", "league", "karda", "bel", "nba"],
  },
];

export function AnyCard() {
  const [img, setImg] = useState(listImg);
  const [underlined, setUnderlined] = useState(0);
  const [PageCard, setPageCard] = useState(CardPageImgs);

  useEffect(() => {}, []);

  const alterUnder = () => {};

  return (
    <>
      <div className="menus">
        {PageCard.map((item, id) => (
          <Button__underlined
            aUnderline={underlined === item.id}
            onClick={() => {
              setUnderlined(item.id);
              setImg(item.imgs);
            }}
          >
            {item.name}
          </Button__underlined>
        ))}
      </div>
      <Card imgName={img} />
    </>
  );
}
