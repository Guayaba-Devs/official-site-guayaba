import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Config } from "@/lib/config";
import { NavbarTop } from "../components/navbar";
import { Hero } from "@/components/hero";
import { LogoSection } from "@/components/marquee/logoSection";
import { TeamSection } from "@/components/team";
import { Newsletter } from "@/components/newsletter";
import { Events } from "@/components/events";
import Footer from "@/components/footer";

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

export default function RootLayout({}: Readonly<{
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
          <Hero />
          <LogoSection />
          <TeamSection />
          <section>
            <Newsletter />
          </section>
          <section>
            <Events />
          </section>
          <Footer />
        </Config>
      </body>
    </html>
  );
}
