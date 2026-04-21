import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { FilmGrain } from "@/components/film-grain";
import { Vignette } from "@/components/vignette";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRSAD — Monitoring Runtime Sentinel & Autonomous Defense",
  description:
    "The next generation of autonomous runtime defense. A sovereign framework that monitors, decides, and isolates threats with full autonomy.",
  keywords: [
    "MRSAD",
    "runtime security",
    "autonomous defense",
    "cybersecurity",
    "sentinel",
    "SOC",
    "zero-trust",
  ],
  openGraph: {
    title: "MRSAD — Sovereign Runtime Defense",
    description:
      "Autonomous runtime sentinel. Monitor, decide, isolate — sovereign by design.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020202",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} bg-void`}
    >
      <body className="bg-void text-foreground font-sans antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Vignette />
        <FilmGrain />
      </body>
    </html>
  );
}
