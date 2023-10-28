import "@/app/_styles/components/atoms/_text-block.scss";

interface TextBlockProps {
  firstLine?: JSX.Element;
  secondLine?: JSX.Element;
  thirdLine?: JSX.Element;
}

export const TextBlock = (props: TextBlockProps) => {
  return (
    <div className="__text_block">
      {props.firstLine}
      {props.secondLine}
      {props.thirdLine}
    </div>
  );
};
