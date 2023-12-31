"use client";

import { TabSliderLayout } from "../../templates/TabSliderLayout";
import { DotSliderLayout } from "../../templates/DotSliderLayout";
import { ButtonSliderLayout } from "../../templates/ButtonSliderLayout";

interface SliderProps {
  variant: "destinations" | "crew" | "technology";
  data: Record<string, any>;
}

export const Slider = (props: SliderProps) => {
  return (
    <div className="__slider">
      <div>
        {props.variant === "destinations" && (
          <TabSliderLayout data={props.data[props.variant]} />
        )}

        {props.variant === "crew" && (
          <DotSliderLayout data={props.data[props.variant]} />
        )}

        {props.variant === "technology" && (
          <ButtonSliderLayout data={props.data[props.variant]} />
        )}
      </div>
    </div>
  );
};
