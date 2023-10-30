import "@/app/_styles/components/atoms/_button-control-slider.scss";

interface ButtonControlSliderProps {
  content: string;
  handleClick: any;
}

export const ButtonControlSlider = (props: ButtonControlSliderProps) => {
  return (
    <div onClick={props.handleClick} className="__button_control_slider">
      <h4>{props.content}</h4>
    </div>
  );
};
