import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

import "./index.css";
import ContactSection from "./sections/ContactSection";
import NavbarSection from "./sections/NavbarSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niajul Hoque",
  description: "My personal developer portfolio",
  icons: "/logo.png",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col justify-between">
          <NavbarSection />
          {children}
          <Analytics />
          <ContactSection />
        </div>
      </body>
    </html>
  );
}
