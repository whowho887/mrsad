"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RetroGrid } from "./retro-grid";
import { BeamButton } from "./beam-button";
import { StaggerGroup, StaggerItem } from "./reveal";
import { ShieldCheck, Terminal } from "lucide-react";

const NeuralMesh = dynamic(
  () => import("./neural-mesh").then((m) => m.NeuralMesh),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid />
      </div>

      {/* Neural mesh behind headline */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-90">
        <div className="h-[620px] w-[620px] max-w-[90vw]">
          <NeuralMesh />
        </div>
      </div>

      {/* Radial mask for depth */}
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
      </CornerTelemetry>
      <CornerTelemetry pos="tr">
        <span className="label-mono">BUILD</span>
        <span className="data-mono text-[11px] text-white/80">2026.01</span>
        <span className="label-mono">CLEARANCE</span>
        <span className="data-mono text-[11px] text-cyan">L5</span>
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
          <StaggerItem>
            <motion.div
              className="glass mb-8 flex items-center gap-3 rounded-full px-4 py-1.5"
              whileHover={{ y: -2 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="label-mono text-[10px] text-white/70">
                MONITORING RUNTIME SENTINEL // ALPHA
              </span>
              <div className="h-3 w-px bg-white/10" />
              <span className="label-mono text-[10px] text-cyan">
                v4.0 · SOVEREIGN
              </span>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="relative">
              <span
                className="block text-[clamp(64px,15vw,220px)] font-semibold leading-[0.88] tracking-[-0.055em] text-chrome-liquid"
                style={{ textShadow: "0 0 40px rgba(0,240,255,0.15)" }}
              >
                MRSAD
              </span>
              <span className="label-mono absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-cyan/70 md:top-2 md:left-[calc(50%+180px)]">
                ⟨ SOVEREIGN RUNTIME ⟩
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-2 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan/50" />
              <p className="label-mono text-[11px] text-white/70">
                Monitoring Runtime Sentinel &amp; Autonomous Defense
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan/50" />
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-8 max-w-2xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              The next generation of{" "}
              <span className="text-white">autonomous runtime defense</span>. A
              sovereign framework that monitors, decides, and isolates threats
              with full autonomy — where the kernel sees, the policy rules.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <BeamButton variant="primary" icon>
                Deploy Sentinel
              </BeamButton>
              <BeamButton variant="ghost" icon={false}>
                <Terminal className="h-4 w-4" strokeWidth={1.5} />
                <span>View Doctrine</span>
              </BeamButton>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-14 flex items-center gap-6 text-[11px]">
              <Stat value="4.2M" label="Threat patterns" />
              <Divider />
              <Stat value="&lt;12ms" label="Containment" />
              <Divider />
              <Stat value="99.998%" label="Uptime SLO" />
              <Divider />
              <Stat value="Zero-Trust" label="By default" icon />
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Scroll hint */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent" />
          <span className="label-mono text-[9px] text-white/50">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && <ShieldCheck className="h-3.5 w-3.5 text-cyan" strokeWidth={1.5} />}
      <div className="flex flex-col items-start">
        <span
          className="data-mono text-[13px] text-white"
          dangerouslySetInnerHTML={{ __html: value }}
        />
        <span className="label-mono text-[9px]">{label}</span>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-6 w-px bg-white/10" />;
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
      className={`pointer-events-none absolute ${positions[pos]} hidden flex-col gap-1 lg:flex`}
    >
      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">{children}</div>
    </div>
  );
}
