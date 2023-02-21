import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Button__underlined } from "./style";
import { CardPageImgsType, Img } from "./Type";

const ListImg = [
  "desencatada",
  "willow",
  "lobisomem",
  "spidey",
  "santa",
  "semlimites",
];

const CardPageImgs: Array<CardPageImgsType> = [
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
  const [img, setImg] = useState([""]);
  const [underlined, setUnderlined] = useState(0);

  useEffect(() => {
    if (underlined === 0) {
      CardPageImgs.map((item, id) => (
        setUnderlined(id), setImg(item.imgs)));
    }
  }, []);

  return (
    <>
      <div className="menus">
        {CardPageImgs.map((item, id) => (
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
      <Card imgsName={img} />
    </>
  );
}
