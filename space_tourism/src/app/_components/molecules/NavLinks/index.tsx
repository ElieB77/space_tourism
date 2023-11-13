import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/_styles/components/molecules/_nav-links.scss";
import { MenuItem } from "@/app/types";

interface NavLinksProps {
  data: MenuItem[];
}

export const NavLinks = (props: NavLinksProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className="__nav_links">
      {props.data.map((link: MenuItem) => {
        return (
          <Link
            className={`nav_link ${pathname === link.to ? "__active" : ""}`}
            key={link.id}
            href={link.to}
          >
            <span>{link.index}</span>
            <span>{link.link}</span>
          </Link>
        );
      })}
    </div>
  );
};
