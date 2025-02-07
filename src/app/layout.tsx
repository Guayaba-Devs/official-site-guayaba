import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Config } from "@/lib/config";
import { NavbarTop } from "../components/navbar";
import { Hero } from "@/components/hero";
import { LogoSection } from "@/components/marquee/logoSection";
import { TeamSection } from "@/components/team";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Guayaba Devs",
  description: "Sitio Oficial de Guayaba Devs",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg antialiased", fontSans.variable)}>
        <Config>
          <NavbarTop />
          <Hero />
          <LogoSection />
          <TeamSection />
        </Config>
      </body>
    </html>
  );
}
