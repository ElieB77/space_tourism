import "@/app/_styles/main.scss";
import { Navbar } from "../_components/molecules/Navbar";
import data from "@/app/_assets/data.json";
import { Header } from "../_components/organisms/Header";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space tourism",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Space tourism</title>
      </Head>
      <body>
        <Header navbar={<Navbar data={data.menu} />} />
        {children}
      </body>
    </html>
  );
}
