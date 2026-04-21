"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RetroGrid } from "./retro-grid";
import { BeamButton } from "./beam-button";
import { StaggerGroup, StaggerItem } from "./reveal";
import { MrsadGlitch } from "./mrsad-glitch";
import { ShieldCheck, Terminal, LockKeyhole } from "lucide-react";

const NeuralMesh = dynamic(
  () => import("./neural-mesh").then((m) => m.NeuralMesh),
  { ssr: false },
);

const REQUEST_EMAIL = "your@institution.edu";

export function Hero() {
  const demoMailto = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    "MRSAD — Request Technical Demo / طلب عرض تقني",
  )}&body=${encodeURIComponent(
    "Organization:\nContact:\nUse-case:\n\n— sent from mrsad.dev",
  )}`;
  const accessMailto = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    "MRSAD — Dashboard Access Request / طلب وصول",
  )}`;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-80">
        <div className="h-[620px] w-[620px] max-w-[90vw]">
          <NeuralMesh />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,240,255,0.05), transparent 60%), radial-gradient(ellipse 100% 80% at 50% 110%, rgba(0,0,0,0.9), transparent 60%)",
        }}
      />

      {/* Corner telemetry */}
      <CornerTelemetry pos="tl">
        <span className="label-mono">NODE</span>
        <span className="data-mono text-[11px] text-white/80">MRSAD-CORE</span>
        <span className="label-mono">MODE</span>
        <span className="data-mono text-[11px] text-cyan">AUTONOMOUS</span>
        <span className="label-mono">AR</span>
        <span className="font-arabic text-[11px] text-cyan/80" dir="rtl">
          ذاتي
        </span>
      </CornerTelemetry>
      <CornerTelemetry pos="tr">
        <span className="label-mono">BUILD</span>
        <span className="data-mono text-[11px] text-white/80">2026.01</span>
        <span className="label-mono">CLEARANCE</span>
        <span className="data-mono text-[11px] text-cyan">L5</span>
        <span className="label-mono">AR</span>
        <span className="font-arabic text-[11px] text-cyan/80" dir="rtl">
          سيادي
        </span>
      </CornerTelemetry>
      <CornerTelemetry pos="bl">
        <span className="label-mono">SENSORS</span>
        <span className="data-mono text-[11px] text-status-ok">ARMED</span>
        <span className="label-mono">POLICY</span>
        <span className="data-mono text-[11px] text-status-ok">ENFORCING</span>
      </CornerTelemetry>
      <CornerTelemetry pos="br">
        <span className="label-mono">RT</span>
        <span className="data-mono text-[11px] text-white/80">ZERO-TRUST</span>
        <span className="label-mono">ORCH</span>
        <span className="data-mono text-[11px] text-cyan">ACTIVE</span>
      </CornerTelemetry>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <StaggerGroup className="flex flex-col items-center">
          {/* Access-restricted badge (cinematic, replaces version badge) */}
          <StaggerItem>
            <motion.div
              className="glass mb-10 flex items-center gap-3 rounded-full px-4 py-1.5"
              whileHover={{ y: -2 }}
            >
              <LockKeyhole
                className="h-3 w-3 text-status-warn"
                strokeWidth={1.8}
              />
              <span className="label-mono text-[10px] text-white/70">
                ACCESS RESTRICTED
              </span>
              <div className="h-3 w-px bg-white/10" />
              <span className="font-arabic text-[11px] text-cyan/75" dir="rtl">
                وصول مقيد · معايرة نهائية
              </span>
              <div className="h-3 w-px bg-white/10" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
            </motion.div>
          </StaggerItem>

          {/* MRSAD — premium glitch headline */}
          <StaggerItem>
            <h1 className="relative inline-block">
              <MrsadGlitch />
              {/* tech tag floating above */}
              <span className="label-mono absolute -top-4 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[10px] text-cyan/60 md:block md:left-auto md:right-[-14rem] md:top-6">
                ⟨ SOVEREIGN RUNTIME ⟩
              </span>
              {/* corner brackets */}
              <span className="pointer-events-none absolute -left-6 -top-4 h-5 w-5 border-l border-t border-cyan/45" />
              <span className="pointer-events-none absolute -right-6 -top-4 h-5 w-5 border-r border-t border-cyan/45" />
              <span className="pointer-events-none absolute -left-6 -bottom-4 h-5 w-5 border-b border-l border-cyan/45" />
              <span className="pointer-events-none absolute -right-6 -bottom-4 h-5 w-5 border-b border-r border-cyan/45" />
            </h1>
          </StaggerItem>

          {/* Arabic title — "مرصاد — منظومة الدفاع" */}
          <StaggerItem>
            <motion.h2
              className="mt-6 font-arabic text-[clamp(1.2rem,2.4vw,1.9rem)] font-bold text-cyan/75 tracking-wide"
              dir="rtl"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              مرصاد — منظومة الدفاع الذاتي
            </motion.h2>
          </StaggerItem>

          {/* Divider + english subtitle */}
          <StaggerItem>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan/50" />
              <p className="label-mono text-[11px] text-white/65">
                Monitoring Runtime Sentinel &amp; Autonomous Defense
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan/50" />
            </div>
          </StaggerItem>

          {/* English + Arabic tagline pair */}
          <StaggerItem>
            <p className="mt-8 max-w-2xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              The next generation of{" "}
              <span className="text-white">autonomous runtime defense</span>. A
              sovereign framework that monitors, decides, and isolates threats
              with full autonomy — where the kernel sees, the policy rules.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p
              className="mt-4 max-w-[640px] font-arabic text-[clamp(0.92rem,1.4vw,1.1rem)] leading-[2] text-muted/80"
              dir="rtl"
            >
              بينما يستجيب الآخرون للتهديد بعد وقوعه،{" "}
              <strong className="text-cyan/80 font-semibold">مرصاد</strong>{" "}
              يراقب ويتصرف — قبل أن تُشنّ الضربة الأولى.
            </p>
          </StaggerItem>

          {/* CTAs — mailto'ed */}
          <StaggerItem>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <BeamButton variant="primary" icon href={demoMailto}>
                <span className="inline-flex items-center gap-2">
                  <span>Request Technical Demo</span>
                  <span
                    className="hidden font-arabic text-[12px] opacity-80 sm:inline"
                    dir="rtl"
                  >
                    · طلب عرض
                  </span>
                </span>
              </BeamButton>
              <BeamButton variant="ghost" href="#doctrine">
                <Terminal className="h-4 w-4" strokeWidth={1.5} />
                <span>View Doctrine</span>
              </BeamButton>
            </div>
          </StaggerItem>

          {/* Stats bar */}
          <StaggerItem>
            <div className="mt-14 hidden flex-wrap items-center justify-center gap-6 text-[11px] md:flex">
              <Stat value="4.2M" label="Threat patterns" ar="نمط تهديد" />
              <Divider />
              <Stat value="&lt;12ms" label="Containment" ar="زمن العزل" />
              <Divider />
              <Stat value="99.998%" label="Uptime SLO" ar="جاهزية" />
              <Divider />
              <Stat
                value="Zero-Trust"
                label="By default"
                ar="افتراضياً"
                icon
              />
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Scroll hint */}
        <motion.div
          className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent" />
          <span className="label-mono text-[9px] text-white/50">SCROLL</span>
        </motion.div>

        {/* hidden accessMailto for SR/semantic */}
        <a href={accessMailto} className="sr-only">
          Request Dashboard Access
        </a>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  ar,
  icon,
}: {
  value: string;
  label: string;
  ar: string;
  icon?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <ShieldCheck className="h-3.5 w-3.5 text-cyan" strokeWidth={1.5} />
      )}
      <div className="flex flex-col items-start">
        <span
          className="data-mono text-[13px] text-white"
          dangerouslySetInnerHTML={{ __html: value }}
        />
        <span className="label-mono text-[9px]">{label}</span>
        <span className="font-arabic text-[10px] text-cyan/40" dir="rtl">
          {ar}
        </span>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-8 w-px bg-white/10" />;
}

function CornerTelemetry({
  pos,
  children,
}: {
  pos: "tl" | "tr" | "bl" | "br";
  children: React.ReactNode;
}) {
  const positions: Record<string, string> = {
    tl: "top-24 left-6",
    tr: "top-24 right-6",
    bl: "bottom-10 left-6",
    br: "bottom-10 right-6",
  };
  return (
    <div
      className={`pointer-events-none absolute ${positions[pos]} hidden flex-col gap-1 xl:flex`}
    >
      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">{children}</div>
    </div>
  );
}
