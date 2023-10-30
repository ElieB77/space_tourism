import "@/app/_styles/components/atoms/_tabs-control-slider.scss";

interface TabControlSliderProps {
  tab: any;
  handleClick: any;
}

export const TabControlSlider = (props: TabControlSliderProps) => {
  return (
    <p onClick={props.handleClick} className="__tabs_control_slider">
      {props.tab}
    </p>
  );
};
