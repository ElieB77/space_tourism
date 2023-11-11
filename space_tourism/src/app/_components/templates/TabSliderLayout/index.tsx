import { TabControlSlider } from "../../atoms/TabControlSlider";
import { TextBlock } from "../../atoms/TextBlock";
import { TwoTextBlock } from "../../atoms/TwoTextBlock";
import { useSliderIndex } from "@/app/_hooks/useSliderIndex";
import Image from "next/image";
import "@/app/_styles/components/templates/_tab-slider-layout.scss";

interface TabSliderLayoutProps {
  data: any;
}

export const TabSliderLayout = (props: TabSliderLayoutProps) => {
  const { sliderIndex, handleSliderIndex } = useSliderIndex(0);

  return (
    <div className="__tab_slider_layout">
      <Image
        src={props.data[sliderIndex].images.webp}
        alt={"Planet"}
        width={445}
        height={445}
      />
      <div>
        <div>
          {props.data.map((tab: any, index: number) => {
            return (
              <TabControlSlider
                key={tab.id}
                tab={tab.name}
                active={index === sliderIndex}
                handleClick={() => handleSliderIndex(index)}
              />
            );
          })}
        </div>

        <TextBlock
          firstLine={<h2>{props.data[sliderIndex].name}</h2>}
          secondLine={<p>{props.data[sliderIndex].description}</p>}
        />
        <hr />
        <TwoTextBlock
          firstHeader={<h2>{props.data[0]["avg-distance"]}</h2>}
          secondHeader={<h2>{props.data[0]["est-travel"]}</h2>}
          firstContent={<h5>{props.data[sliderIndex].distance}</h5>}
          secondContent={<h5>{props.data[sliderIndex].travel}</h5>}
        />
      </div>
    </div>
  );
};
