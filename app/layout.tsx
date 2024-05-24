import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import NavbarSection from "./components/core/NavbarSection";
import ContactSection from "./components/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niajul Hoque",
  description: "My personal developer portfolio",
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
          <ContactSection />
        </div>
      </body>
    </html>
  );
}
