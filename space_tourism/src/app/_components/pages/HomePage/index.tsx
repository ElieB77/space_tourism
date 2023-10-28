import { TextBlock } from "../../atoms/TextBlock";
import data from "@/app/_assets/data.json";
import "@/app/_styles/components/pages/_home-page.scss";
import { Button } from "../../atoms/Button";
import { Container } from "../../templates/Container";

export const HomePage = () => {
  return (
    <Container>
      <div className="__home_page">
        <TextBlock
          firstLine={<h4>{data.home["first-line"]}</h4>}
          secondLine={<h1>{data.home["second-line"]}</h1>}
          thirdLine={<p>{data.home["third-line"]}</p>}
        />
        <Button content={"explore"} to={"/destination"} />
      </div>
    </Container>
  );
};
