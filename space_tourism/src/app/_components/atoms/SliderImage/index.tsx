import Image from "next/image";
import { motion } from "framer-motion";
import { animationConfig } from "@/app/_utils/constants";

interface SliderImageProps {
  id: number;
  source: string;
  width: number;
  height: number;
}

export const SliderImage = (props: SliderImageProps) => {
  return (
    <motion.div key={props.id} {...animationConfig}>
      <Image
        src={props.source}
        alt={"Slider Image"}
        width={props.width}
        height={props.height}
      />
    </motion.div>
  );
};
