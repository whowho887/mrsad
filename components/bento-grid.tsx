"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import {
  Cpu,
  Radio,
  ShieldCheck,
  GitBranch,
  Zap,
  Lock,
  Activity,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section
      id="architecture"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-40"
    >
      <SectionHeader
        eyebrow="02 — ARCHITECTURE"
        title="Seven cores. One sovereign mind."
        description="Every layer is custom-built for zero-trust runtime defense. No cloud dependence. No third-party telemetry. Sovereign by design."
      />

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[240px_240px_240px] lg:gap-5">
        {/* KERNEL — tall left */}
        <BentoCard
          className="md:row-span-2"
          label="01"
          title="Deep Kernel Sensors"
          subtitle="eBPF · Runtime Fabric"
          icon={<Cpu className="h-5 w-5" strokeWidth={1.4} />}
        >
          <KernelVisual />
          <p className="relative z-10 text-[13px] leading-relaxed text-muted">
            Sub-millisecond syscall inspection rooted in the kernel. Every
            process, every pipe — observed without agents, without blind spots.
          </p>
        </BentoCard>

        {/* EVENT PIPELINE — wide top */}
        <BentoCard
          className="md:col-span-2"
          label="02"
          title="Sovereign Event Pipeline"
          subtitle="Signal Bus · Immutable Log"
          icon={<Radio className="h-5 w-5" strokeWidth={1.4} />}
        >
          <PipelineVisual />
        </BentoCard>

        {/* POLICY ENGINE */}
        <BentoCard
          label="03"
          title="Autonomous Policy Engine"
          subtitle="Decision Matrix"
          icon={<GitBranch className="h-5 w-5" strokeWidth={1.4} />}
        >
          <PolicyVisual />
        </BentoCard>

        {/* RESPONSE CORE */}
        <BentoCard
          label="04"
          title="Response Orchestrator"
          subtitle="Containment · Isolation"
          icon={<Zap className="h-5 w-5" strokeWidth={1.4} />}
        >
          <ResponseVisual />
        </BentoCard>

        {/* FORENSIC VAULT — wide bottom */}
        <BentoCard
          className="md:col-span-2"
          label="05"
          title="Forensic State Engine"
          subtitle="Evidence Vault · SEALED"
          icon={<Lock className="h-5 w-5" strokeWidth={1.4} />}
        >
          <ForensicVisual />
        </BentoCard>

        {/* BEHAVIOR */}
        <BentoCard
          label="06"
          title="Behavioral Intelligence"
          subtitle="4.2M patterns loaded"
          icon={<Activity className="h-5 w-5" strokeWidth={1.4} />}
        >
          <BehaviorVisual />
        </BentoCard>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-cyan/60" />
          <span className="label-mono text-cyan/80">{eyebrow}</span>
        </div>
        <h2 className="max-w-2xl text-balance text-[42px] font-semibold leading-[1] tracking-[-0.04em] text-white md:text-[56px]">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-[15px] leading-relaxed text-muted">
        {description}
      </p>
    </Reveal>
  );
}

function BentoCard({
  label,
  title,
  subtitle,
  icon,
  className,
  children,
}: {
  label: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group corner-mark relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-obsidian/50 p-6 backdrop-blur-[20px] transition-colors hover:border-cyan/25",
          className
        )}
      >
        {/* Ambient glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.08), transparent 60%)",
            }}
          />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.02] text-cyan">
              {icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium tracking-[-0.02em] text-white">
                {title}
              </span>
              <span className="label-mono text-[9.5px]">{subtitle}</span>
            </div>
          </div>
          <span className="label-mono text-white/30">{label}</span>
        </div>

        {/* Body */}
        <div className="relative z-0 mt-4 flex flex-1 flex-col gap-3">
          {children}
        </div>
      </motion.article>
    </Reveal>
  );
}

/* ─── Visuals ─── */

function KernelVisual() {
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.04] bg-void/60">
      <div className="scan-line absolute" style={{ top: "20%" }} />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,240,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative grid h-full grid-cols-6 gap-1 p-3">
        {Array.from({ length: 48 }).map((_, i) => {
          const active = [3, 7, 11, 14, 17, 22, 28, 33, 41].includes(i);
          const hot = [11, 28].includes(i);
          return (
            <motion.div
              key={i}
              className={cn(
                "h-3 rounded-sm",
                hot
                  ? "bg-status-threat shadow-[0_0_10px_#ff3355]"
                  : active
                    ? "bg-cyan shadow-[0_0_8px_#00F0FF]"
                    : "bg-white/[0.05]"
              )}
              animate={
                active
                  ? { opacity: [0.4, 1, 0.4] }
                  : { opacity: [0.3, 0.5, 0.3] }
              }
              transition={{
                duration: hot ? 1.2 : 2 + (i % 4) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 6) * 0.12,
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
        <span className="label-mono text-[9px] text-white/40">SYSCALL_MAP</span>
        <span className="data-mono text-[10px] text-cyan">48/48 OBSERVED</span>
      </div>
    </div>
  );
}

function PipelineVisual() {
  const stages = [
    { label: "INGEST", active: true },
    { label: "NORMALIZE", active: true },
    { label: "CORRELATE", active: true },
    { label: "DECIDE", active: true },
    { label: "DISPATCH", active: false },
  ];
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.04] bg-void/60 p-4">
      <div className="flex h-full items-center justify-between gap-1">
        {stages.map((s, i) => (
          <div key={i} className="flex flex-1 items-center gap-1">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-md border",
                  s.active
                    ? "border-cyan/40 bg-cyan/5 text-cyan"
                    : "border-white/10 bg-white/[0.02] text-white/30"
                )}
                animate={s.active ? { boxShadow: ["0 0 0px #00F0FF00", "0 0 18px #00F0FF55", "0 0 0px #00F0FF00"] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <span className="label-mono text-[9px]">{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
              <span className="label-mono text-[8.5px] whitespace-nowrap">
                {s.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className="relative h-px flex-1 overflow-hidden bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.4,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
        <span className="label-mono text-[9px] text-white/40">THROUGHPUT</span>
        <span className="data-mono text-[10px] text-cyan">
          218K evt/s · p99 &lt; 4ms
        </span>
      </div>
    </div>
  );
}

function PolicyVisual() {
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.04] bg-void/60 p-3 font-mono text-[10.5px] leading-relaxed">
      <pre className="text-white/80">
        <span className="text-cyan">rule</span>{" "}
        <span className="text-white">container_escape</span>{" "}
        <span className="text-white/40">{"{"}</span>
        {"\n  "}
        <span className="text-cyan/80">when</span> syscall =={" "}
        <span className="text-status-warn">setns</span>
        {"\n  "}
        <span className="text-cyan/80">and</span> cap_sys_admin ==
        <span className="text-status-ok"> true</span>
        {"\n  "}
        <span className="text-cyan/80">then</span>{" "}
        <span className="text-status-threat">→ ISOLATE</span>
        {"\n"}
        <span className="text-white/40">{"}"}</span>
      </pre>
      <motion.div
        className="absolute inset-x-3 bottom-3 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="label-mono text-[9px] text-white/40">MATCH</span>
        <span className="data-mono text-[10px] text-status-threat">
          ◉ TRIGGERED
        </span>
      </motion.div>
    </div>
  );
}

function ResponseVisual() {
  const actions = ["KILL", "QUARANTINE", "SEAL", "ALERT"];
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.04] bg-void/60 p-3">
      <div className="flex flex-col gap-2">
        {actions.map((a, i) => (
          <motion.div
            key={a}
            className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-1.5"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3 w-3 text-status-ok" strokeWidth={2} />
              <span className="label-mono text-[10px] text-white/80">{a}</span>
            </div>
            <span className="data-mono text-[9px] text-cyan">
              {Math.floor(Math.random() * 8 + 2)}ms
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ForensicVisual() {
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.04] bg-void/60">
      {/* Chain of blocks */}
      <div className="relative flex h-full items-center gap-2 overflow-hidden p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex h-20 flex-1 flex-col justify-between rounded-md border border-cyan/15 bg-gradient-to-b from-cyan/[0.04] to-transparent p-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <span className="label-mono text-[8px] text-white/40">
              #{(0x4a2 + i).toString(16).toUpperCase()}
            </span>
            <div className="flex flex-col gap-0.5">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="h-[3px] rounded-sm bg-cyan/40"
                  style={{ width: `${60 + Math.sin(i + j) * 30}%` }}
                />
              ))}
            </div>
            <span className="data-mono text-[8px] text-cyan/70">SHA·SEAL</span>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
        <span className="label-mono text-[9px] text-white/40">
          IMMUTABLE CHAIN
        </span>
        <span className="data-mono text-[10px] text-status-ok">✓ SEALED</span>
      </div>
    </div>
  );
}

function BehaviorVisual() {
  // Mini waveform
  const bars = Array.from({ length: 28 }, (_, i) =>
    25 + Math.sin(i * 0.6) * 30 + Math.cos(i * 0.3) * 20
  );
  return (
    <div className="relative flex flex-1 items-end gap-[3px] overflow-hidden rounded-lg border border-white/[0.04] bg-void/60 p-3">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={cn(
            "flex-1 rounded-sm",
            i === 14 || i === 15 ? "bg-status-threat" : "bg-cyan/60"
          )}
          style={{ height: `${Math.abs(h) + 8}%` }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.6 + (i % 3) * 0.3,
            repeat: Infinity,
            delay: i * 0.04,
          }}
        />
      ))}
      <div className="absolute inset-x-3 top-2 flex items-center justify-between">
        <span className="label-mono text-[9px] text-white/40">ANOMALY</span>
        <span className="data-mono text-[10px] text-status-threat">
          +2σ @ t:14
        </span>
      </div>
    </div>
  );
}
