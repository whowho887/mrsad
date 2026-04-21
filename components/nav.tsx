"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BeamButton } from "./beam-button";

const links = [
  { label: "Doctrine", ar: "المبدأ", href: "#doctrine" },
  { label: "Architecture", ar: "المعمارية", href: "#architecture" },
  { label: "Sentinel", ar: "الحارس", href: "#sentinel" },
  { label: "Reveal", ar: "الكشف", href: "#reveal" },
  { label: "Telemetry", ar: "القياس", href: "#telemetry" },
];

const REQUEST_EMAIL = "your@institution.edu";

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 160], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 160], [0, 1]);
  const bg = useTransform(bgOpacity, (v) => `rgba(8,8,10,${v * 0.7})`);
  const bc = useTransform(borderOpacity, (v) => `rgba(255,255,255,${0.06 * v})`);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center px-6 py-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{
          backgroundColor: bg,
          borderColor: bc,
        }}
        className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/[0.06] px-5 py-2 backdrop-blur-[20px]"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-md border border-cyan/40" />
            <div className="absolute inset-1 rounded-[3px] bg-cyan/10" />
            <div className="absolute inset-0 rounded-md border border-cyan/10 blur-sm" />
            <div className="relative h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#00F0FF]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-white">
              MRSAD
            </span>
            <span className="label-mono mt-0.5 text-[9px]">
              SOVEREIGN SENTINEL
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3.5 py-1.5 text-[12px] text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              <span>{l.label}</span>
              <span
                className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 translate-y-0.5 font-arabic text-[9px] text-cyan/0 transition-all group-hover:text-cyan/60 lg:block"
                dir="rtl"
              >
                {l.ar}
              </span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 px-2 sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-ok/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-ok" />
            </span>
            <span className="label-mono text-[10px]">LIVE</span>
          </div>
          <BeamButton
            variant="primary"
            icon
            href={`mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
              "MRSAD — Access Request / طلب وصول",
            )}`}
          >
            Request Access
          </BeamButton>
        </div>
      </motion.div>
    </motion.header>
  );
}
