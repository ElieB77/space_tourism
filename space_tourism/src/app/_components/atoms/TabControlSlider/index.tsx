import "@/app/_styles/components/atoms/_tabs-control-slider.scss";

interface TabControlSliderProps {
  tab: string;
  handleClick: () => void;
  active: boolean;
}

export const TabControlSlider = (props: TabControlSliderProps) => {
  return (
    <p
      onClick={props.handleClick}
      className={`__tabs_control_slider ${props.active ? "active_tab" : ""}`}
    >
      {props.tab}
    </p>
  );
};
