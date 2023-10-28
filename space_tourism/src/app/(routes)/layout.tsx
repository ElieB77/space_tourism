import "@/app/_styles/main.scss";
import { Navbar } from "../_components/molecules/Navbar";
import data from "@/app/_assets/data.json";
import { Header } from "../_components/organisms/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header navbar={<Navbar data={data.menu} />} />
        {children}
      </body>
    </html>
  );
}
