import { TextBlock } from "../../atoms/TextBlock";
import data from "@/app/_assets/data.json";
import "@/app/_styles/components/_home-page.scss";

export const HomePage = () => {
  return (
    <div className="__home_page">
      <TextBlock
        firstLine={<h4>{data.home["first-line"]}</h4>}
        secondLine={<h1>{data.home["second-line"]}</h1>}
        thirdLine={<p>{data.home["third-line"]}</p>}
      />
    </div>
  );
};
