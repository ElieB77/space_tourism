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

{
  /* <TextBlock
          firstLine={<h2>{data.destinations[sliderIndex].name}</h2>}
          secondLine={<p>{data.destinations[sliderIndex].description}</p>}
        />
        <TwoTextBlock
          firstHeader={<h2>{data.destinations[0]["avg-distance"]}</h2>}
          secondHeader={<h2>{data.destinations[0]["est-travel"]}</h2>}
          firstContent={<h5>{data.destinations[sliderIndex].distance}</h5>}
          secondContent={<h5>{data.destinations[sliderIndex].travel}</h5>}
        /> */
}
