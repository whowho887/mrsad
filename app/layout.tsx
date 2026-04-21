import type { Metadata, Viewport } from "next";
import {
  Inter_Tight,
  JetBrains_Mono,
  Playfair_Display,
  Noto_Kufi_Arabic,
  Syne,
} from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { FilmGrain } from "@/components/film-grain";
import { Vignette } from "@/components/vignette";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-kufi",
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRSAD — مرصاد · منظومة الدفاع الذاتي المستقل",
  description:
    "الجيل القادم من الدفاع الذاتي وقت التشغيل. منظومة تراقب وتقرر وتعزل التهديدات باستقلالية كاملة — قبل أن تُشنّ الضربة الأولى.",
  keywords: [
    "MRSAD",
    "مرصاد",
    "runtime security",
    "autonomous defense",
    "الدفاع الذاتي",
    "الأمن السيبراني",
    "sentinel",
    "SOC",
    "zero-trust",
  ],
  openGraph: {
    title: "MRSAD — Sovereign Runtime Defense",
    description:
      "منظومة دفاع ذاتي مستقلة. تراقب وتقرر وتعزل — سيادية بالتصميم.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      lang="ar"
      dir="rtl"
      className={`${interTight.variable} ${mono.variable} ${playfair.variable} ${kufi.variable} ${syne.variable} bg-void`}
      suppressHydrationWarning
    >
      <body
        className="bg-void text-foreground font-sans antialiased"
        style={{ direction: "ltr" }}
      >
        <LenisProvider>{children}</LenisProvider>
        <Vignette />
        <FilmGrain />
      </body>
    </html>
  );
}
