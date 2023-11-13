import { Title } from "../../atoms/Title";
import { Slider } from "../../organisms/Slider";
import { Container } from "../../templates/Container";
import data from "@/app/_assets/data.json";

export const CrewPage = () => {
  return (
    <Container
      title={<Title content={data.crew[0].title} index={data.crew[0].index} />}
    >
      <div className="__crew_page">
        <Slider variant="crew" data={data} />
      </div>
    </Container>
  );
};

{
}
