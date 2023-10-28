import "@/app/_styles/components/atoms/_two-text-block.scss";

interface TwoTextBlockProps {
  firstHeader: JSX.Element;
  secondHeader: JSX.Element;
  firstContent: JSX.Element;
  secondContent: JSX.Element;
}

export const TwoTextBlock = (props: TwoTextBlockProps) => {
  return (
    <div className="__two_text_block">
      <div>
        {props.firstHeader}
        {props.firstContent}
      </div>
      <div>
        {props.secondHeader}
        {props.secondContent}
      </div>
    </div>
  );
};
