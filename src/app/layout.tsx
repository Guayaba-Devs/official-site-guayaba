import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/theme";
import { NavbarTop } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const siteUrl = "https://guayabadevs.com";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
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
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark light",
};

// Inline script to set theme before paint — prevents flash
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Guayaba Devs",
              url: "https://guayabadevs.com",
              logo: "https://guayabadevs.com/images/mascota.png",
              description:
                "Comunidad de desarrolladores que impulsa talento tech en México a través de eventos, mentorías y proyectos reales.",
              sameAs: [
                "https://github.com/Guayaba-Devs",
                "https://www.instagram.com/guayaba_devs_official/",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased mx-auto overflow-auto",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <NavbarTop />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
