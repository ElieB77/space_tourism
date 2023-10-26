"use client";
import "@/app/_styles/components/_navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavlink {
  index: string;
  link: string;
  to: string;
  id: number;
}

interface NavbarProps {
  data: INavlink[];
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const pathname = usePathname();
  return (
    <div className="__navbar">
      <hr />
      {props.data.map((link: INavlink) => {
        return (
          <>
            <Link
              className={`nav_link ${pathname === link.to ? "__active" : ""}`}
              key={link.id}
              href={link.to}
            >
              <span>{link.index}</span>
              <span>{link.link}</span>
            </Link>
          </>
        );
      })}
    </div>
  );
};
