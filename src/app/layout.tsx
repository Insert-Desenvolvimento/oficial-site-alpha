import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Alpha Academia",
  description: "Site oficial da Academia Alpha de Mar de Espanha - MG / Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
