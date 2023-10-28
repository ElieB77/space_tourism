import "@/app/_styles/components/_text-block.scss";

interface TextBlockProps {
  firstLine?: any;
  secondLine?: any;
  thirdLine?: any;
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
