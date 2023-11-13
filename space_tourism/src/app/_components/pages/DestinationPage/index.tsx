import { Title } from "../../atoms/Title";
import { Slider } from "../../organisms/Slider";
import { Container } from "../../templates/Container";
import data from "@/app/_assets/data.json";

export const DestinationPage = () => {
  return (
    <Container
      title={
        <Title
          content={data.destinations[0].title}
          index={data.destinations[0].index}
        />
      }
    >
      <div className="__destination_page">
        <Slider variant="destinations" data={data} />
      </div>
    </Container>
  );
};
