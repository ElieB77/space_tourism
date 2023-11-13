import "@/app/_styles/components/atoms/_text-block.scss";
import { motion } from "framer-motion";
import { animationConfig } from "@/app/_utils/constants/index";

interface TextBlockProps {
  firstLine?: JSX.Element;
  secondLine?: JSX.Element;
  thirdLine?: JSX.Element;
  id?: number;
}

export const TextBlock = (props: TextBlockProps) => {
  return (
    <motion.div key={props.id} {...animationConfig} className="__text_block">
      {props.firstLine}
      {props.secondLine}
      {props.thirdLine}
    </motion.div>
  );
};
