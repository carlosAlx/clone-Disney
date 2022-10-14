import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
type props = {
  title: string;
  info: string;
};

const Accordion = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0.6rem 1rem;
  margin-top: 1rem;
`;

export function Duvidas(props: props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section>
      <article className="question">
        <Accordion>
          <h3 onClick={() => setExpanded(!expanded)} className="question-title">
            {props.title}
          </h3>
          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </Accordion>
        {expanded && <p>{props.info}</p>}
      </article>
    </section>
  );
}
