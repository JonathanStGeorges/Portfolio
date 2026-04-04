import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Sora } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/deployment";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl() ? new URL(getSiteUrl()!) : undefined,
  title: {
    default: `${siteConfig.name} | Robotics, AI, and Systems Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio for JJ / EXIBIST, an engineer and student working across robotics, AI, simulation, software systems, and technical interface design.",
  keywords: [
    "JJ",
    "EXIBIST",
    "robotics portfolio",
    "AI portfolio",
    "systems engineer",
    "FRC 1884",
    "simulation",
  ],
  openGraph: {
    title: `${siteConfig.name} | Robotics, AI, and Systems Portfolio`,
    description:
      "Engineering portfolio focused on robotics software, AI, simulation architecture, and technical product design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Robotics, AI, and Systems Portfolio`,
    description:
      "Engineer and student building robotics, AI, simulation, and systems software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="site-shell min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
