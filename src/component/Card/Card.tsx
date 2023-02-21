import { Card__img, Container__card } from "./style";


type img = {
  imgsName: string[];
};

export function Card(prop: img) {
  return (
    <Container__card>
      {prop.imgsName.map((imgName, id) => (
        <Card__img key={id} src={"/src/assets/img/" + imgName + ".jpg"} alt="" />
      ))}
    </Container__card>
  );
}
