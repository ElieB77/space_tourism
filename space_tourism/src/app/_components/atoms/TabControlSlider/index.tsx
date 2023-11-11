import "@/app/_styles/components/atoms/_tabs-control-slider.scss";

interface TabControlSliderProps {
  tab: any;
  handleClick: any;
  active: boolean;
}

export const TabControlSlider = (props: TabControlSliderProps) => {
  console.log(props.active);
  return (
    <p
      onClick={props.handleClick}
      className={`__tabs_control_slider ${props.active ? "active_tab" : ""}`}
    >
      {props.tab}
    </p>
  );
};
