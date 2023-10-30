import { TabControlSlider } from "../../atoms/TabControlSlider";
import { TextBlock } from "../../atoms/TextBlock";
import { TwoTextBlock } from "../../atoms/TwoTextBlock";
import { useSliderIndex } from "@/app/_hooks/useSliderIndex";
import Image from "next/image";
import "@/app/_styles/components/templates/_dot-slider-layout.scss";
import { DotControlSlider } from "../../atoms/DotControlSlider";

interface DotSliderLayoutProps {
  data: any;
}

export const DotSliderLayout = (props: DotSliderLayoutProps) => {
  const { sliderIndex, handleSliderIndex } = useSliderIndex(0);

  return (
    <div className="__dot_slider_layout">
      <div>
        <TextBlock
          firstLine={<h4>{props.data[sliderIndex].role}</h4>}
          secondLine={<h3>{props.data[sliderIndex].name}</h3>}
          thirdLine={<p>{props.data[sliderIndex].bio}</p>}
        />
        {props.data.map((dot: any, index: number) => {
          return (
            <DotControlSlider
              key={dot.id}
              handleClick={() => handleSliderIndex(index)}
            />
          );
        })}
      </div>
      <Image
        src={props.data[sliderIndex].images.webp}
        alt={"Crew Portrait"}
        width={props.data[sliderIndex].images.width}
        height={props.data[sliderIndex].images.width}
      />
    </div>
  );
};
