import { TwoTextBlock } from "../../atoms/TwoTextBlock";
import data from "@/app/_assets/data.json";

export const DestinationPage = () => {
  return (
    <div>
      <TwoTextBlock
        firstHeader={<h2>{data.destinations[0]["avg-distance"]}</h2>}
        secondHeader={<h2>{data.destinations[0]["est-travel"]}</h2>}
        firstContent={<h5>{data.destinations[1].distance}</h5>}
        secondContent={<h5>{data.destinations[0].travel}</h5>}
      />
    </div>
  );
};
