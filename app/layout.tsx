import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niajul Hoque",
  description: "My personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
