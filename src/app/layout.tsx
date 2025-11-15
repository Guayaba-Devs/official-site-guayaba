import { Metadata } from "next/types";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Config } from "@/lib/config";
import { NavbarTop } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
  preload: false,
});

export const metadata: Metadata = {
  title: "Guayaba Devs",
  description: "Sitio Oficial de Guayaba Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg antialiased mx-auto overflow-auto",
          fontSans.variable
        )}
      >
        <Config>
          <NavbarTop />
          {children}
          <Footer />
        </Config>
      </body>
    </html>
  );
}
