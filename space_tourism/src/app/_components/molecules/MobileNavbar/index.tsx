import "@/app/_styles/components/molecules/_mobile-navbar.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLinks } from "../NavLinks";

interface MobileNavbarProps {
  data: any;
}

export const MobileNavbar = (props: MobileNavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="__mobile_navbar">
      <Image
        onClick={() => setIsOpen(true)}
        src={"/images/shared/icon-hamburger.svg"}
        alt={"Burger"}
        width={24}
        height={21}
      />
      <div className={`__mobile_navbar_menu ${isOpen ? "menu_active" : ""}`}>
        <Image
          onClick={() => setIsOpen(false)}
          src={"/images/shared/icon-close.svg"}
          alt={"Burger"}
          width={19}
          height={19}
        />
        <NavLinks data={props.data} />
      </div>
    </div>
  );
};
