import "@/app/_styles/components/atoms/_dot-control-slider.scss";

interface DotControlSliderProps {
  handleClick: () => void;
  active: boolean;
}

export const DotControlSlider = (props: DotControlSliderProps) => {
  return (
    <div
      className={`__dot_control_slider ${props.active ? "active_dot" : ""}`}
      onClick={props.handleClick}
    ></div>
  );
};
