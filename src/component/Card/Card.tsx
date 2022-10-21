import styled from "styled-components";
import { Card__img, Container__card } from "./style";


type img = {
  imgName: string[];
};
export function Card(prop: img) {
  return (
    <Container__card>
      {prop.imgName.map((imgName, id) => (
        <Card__img key={id} src={"./img/" + imgName + ".jpg"} alt="" />
      ))}
    </Container__card>
  );
}
