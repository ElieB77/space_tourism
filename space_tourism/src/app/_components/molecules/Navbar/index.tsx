"use client";
import "@/app/_styles/components/molecules/_navbar.scss";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "../MobileNavbar";
import { NavLinks } from "../NavLinks";

interface NavbarProps {
  data: any;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const pathname = usePathname();
  return (
    <>
      <div className="__navbar">
        <hr />

        <NavLinks data={props.data} />
      </div>
      <MobileNavbar data={props.data} />
    </>
  );
};
