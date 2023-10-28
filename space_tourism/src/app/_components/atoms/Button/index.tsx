import Link from "next/link";
import "@/app/_styles/components/_button.scss";

interface ButtonProps {
  content: string;
  to: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <Link className="__button" href={props.to}>
      {props.content}
    </Link>
  );
};
