import "@/app/_styles/main.scss";
import { Navbar } from "../_components/Navbar";
import data from "@/app/_assets/data.json";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar data={data.menu} />
        {children}
      </body>
    </html>
  );
}
