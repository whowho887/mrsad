import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { Doctrine } from "@/components/doctrine";
import { BentoGrid } from "@/components/bento-grid";
import { SentinelFeed } from "@/components/sentinel-feed";
import { CtaBlock } from "@/components/cta-block";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Doctrine />
      <BentoGrid />
      <SentinelFeed />
      <CtaBlock />
      <Footer />
    </main>
  );
}
