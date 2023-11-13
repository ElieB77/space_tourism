import { TextBlock } from "../../atoms/TextBlock";
import { useSliderIndex } from "@/app/_hooks/useSliderIndex";
import "@/app/_styles/components/templates/_dot-slider-layout.scss";
import { DotControlSlider } from "../../atoms/DotControlSlider";
import { SliderImage } from "../../atoms/SliderImage";
import { DotSliderLayoutType } from "@/app/types";

interface DotSliderLayoutProps {
  data: DotSliderLayoutType[];
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
          id={sliderIndex}
        />
        {props.data.map((dot: DotSliderLayoutType, index: number) => {
          return (
            <DotControlSlider
              key={dot.id}
              handleClick={() => handleSliderIndex(index)}
              active={index === sliderIndex}
            />
          );
        })}
      </div>
      <SliderImage
        id={sliderIndex}
        source={props.data[sliderIndex].images.webp}
        width={props.data[sliderIndex].images.width}
        height={props.data[sliderIndex].images.height}
      />
    </div>
  );
};
