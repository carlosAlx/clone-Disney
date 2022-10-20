import styled from "styled-components";

const Card__img = styled.img`
  width: 32%;
  border-radius: 0.3rem;
  margin: 1rem auto;

  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
`;
const Container__card = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

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
