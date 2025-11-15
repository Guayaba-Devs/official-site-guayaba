import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Config } from "@/lib/config";
import { NavbarTop } from "@/components/navbar";
import { Footer } from "@/components/footer";

const siteUrl = "https://guayabadevs.com";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Guayaba Devs · Comunidad Tech en México",
    template: "%s · Guayaba Devs",
  },
  description:
    "Comunidad de desarrolladores Guayaba Devs: eventos, talleres y networking para impulsar el talento tecnológico en México.",
  keywords: [
    "Guayaba Devs",
    "comunidad tech",
    "eventos de tecnología",
    "desarrolladores México",
    "workshops",
    "meetups",
  ],
  authors: [{ name: "Guayaba Devs", url: siteUrl }],
  creator: "Guayaba Devs",
  publisher: "Guayaba Devs",
  openGraph: {
    title: "Guayaba Devs · Comunidad Tech en México",
    description:
      "Descubre eventos, workshops y recursos para desarrolladores organizados por Guayaba Devs.",
    url: siteUrl,
    siteName: "Guayaba Devs",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: `${siteUrl}/images/mascota.png`,
        width: 1200,
        height: 630,
        alt: "Guayaba Devs comunidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@guayabadevs",
    creator: "@guayabadevs",
    title: "Guayaba Devs · Comunidad Tech en México",
    description:
      "Únete a Guayaba Devs para recibir noticias, eventos y oportunidades para desarrolladores.",
    images: [`${siteUrl}/images/mascota.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
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
