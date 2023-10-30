import { useState } from "react";

export function useSliderIndex(initialIndex = 0) {
  const [sliderIndex, setSliderIndex] = useState(initialIndex);

  const handleSliderIndex = (index: number) => {
    setSliderIndex(index);
  };

  return { sliderIndex, handleSliderIndex };
}
