import { TextBlock } from "../../atoms/TextBlock";
import { useSliderIndex } from "@/app/_hooks/useSliderIndex";
import "@/app/_styles/components/templates/_button-slider-layout.scss";
import { ButtonControlSlider } from "../../atoms/ButtonControlSlider";
import { SliderImage } from "../../atoms/SliderImage";
import { ButtonSliderLayoutType } from "@/app/types";

interface ButtontSliderLayoutProps {
  data: ButtonSliderLayoutType[];
}

export const ButtonSliderLayout = (props: ButtontSliderLayoutProps) => {
  const { sliderIndex, handleSliderIndex } = useSliderIndex(0);

  return (
    <div className="__button_slider_layout">
      <div>
        <div>
          {props.data.map((btn: ButtonSliderLayoutType, index: number) => {
            return (
              <ButtonControlSlider
                key={btn.id}
                handleClick={() => handleSliderIndex(index)}
                content={btn.id}
                active={index === sliderIndex}
              />
            );
          })}
        </div>
        <TextBlock
          firstLine={<p>{props.data[0].header}</p>}
          secondLine={<h3>{props.data[sliderIndex].name}</h3>}
          thirdLine={<p>{props.data[sliderIndex].description}</p>}
          id={sliderIndex}
        />
      </div>
      <SliderImage
        id={sliderIndex}
        source={props.data[sliderIndex].images?.portrait}
        width={props.data[sliderIndex].images?.width}
        height={props.data[sliderIndex].images?.height}
      />
    </div>
  );
};
