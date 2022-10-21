import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import {
  Acordion,
  Question,
  Question__Contaienr,
  Question__title,
  Button__icon
} from "./style";

type props = {
  title: string;
  info: string;
};

export function Duvidas(props: props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article>
      <Question__Contaienr>
        <Acordion>
          <Question__title onClick={() => setExpanded(!expanded)} >
            {props.title}
          </Question__title>
          <Button__icon onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </Button__icon>
        </Acordion>
        {expanded && <Question>{props.info}</Question>}
      </Question__Contaienr>
    </article>
  );
}
