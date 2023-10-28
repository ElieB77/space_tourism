import "@/app/_styles/components/organisms/_header.scss";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  navbar: JSX.Element;
}

export const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div className="__header">
      <Link href={"/"}>
        <Image
          src={"/images/shared/logo.svg"}
          width={48}
          height={48}
          alt="Logo"
          priority
        />
      </Link>
      {props.navbar}
    </div>
  );
};
