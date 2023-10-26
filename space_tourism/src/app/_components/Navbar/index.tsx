import "@/app/_styles/components/_navbar.scss";
import Link from "next/link";

interface INavlink {
  index: string;
  link: string;
  to: string;
}

interface NavbarProps {
  data: INavlink[];
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <div className="__navbar">
      <hr />
      {props.data.map((el: INavlink) => {
        return (
          <>
            <Link className="nav_link" key={el.index} href={el.to}>
              <span>{el.index}</span>
              <span>{el.link}</span>
            </Link>
          </>
        );
      })}
    </div>
  );
};
