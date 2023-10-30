import { ButtonControlSlider } from "../../atoms/ButtonControlSlider";
import data from "@/app/_assets/data.json";
import { Container } from "../../templates/Container";
import { Slider } from "../../organisms/Slider";
import { Title } from "../../atoms/Title";

export const TechnologyPage = () => {
  return (
    <Container
      title={
        <Title
          content={data.technology[0].title}
          index={data.technology[0].index}
        />
      }
    >
      <Slider variant={"technology"} data={data} />
    </Container>
  );
};
