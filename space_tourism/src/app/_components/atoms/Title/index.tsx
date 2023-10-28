import "@/app/_styles/components/atoms/_title.scss";

interface TitleProps {
  content: string;
  index: string;
}

export const Title = (props: TitleProps) => {
  return (
    <h4 className="__title">
      <span>{props.index}</span>
      {props.content}
    </h4>
  );
};
