"use client";
import "@/app/_styles/components/molecules/_navbar.scss";
import { MobileNavbar } from "../MobileNavbar";
import { NavLinks } from "../NavLinks";
import { MenuItem } from "@/app/types";

interface NavbarProps {
  data: MenuItem[];
}

export const Navbar = (props: NavbarProps): JSX.Element => {
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
