import "@/app/_styles/components/atoms/_dot-control-slider.scss";

interface DotControlSliderProps {
  handleClick: any;
}

export const DotControlSlider = (props: DotControlSliderProps) => {
  return (
    <div className="__dot_control_slider" onClick={props.handleClick}></div>
  );
};
