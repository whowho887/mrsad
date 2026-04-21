"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle2,
  Shield,
  Activity,
  Radio,
} from "lucide-react";

type Severity = "ok" | "warn" | "threat";
type Event = {
  id: string;
  t: string;
  node: string;
  msg: string;
  sev: Severity;
  action: string;
};

const EVENT_POOL: Omit<Event, "id" | "t">[] = [
  {
    node: "NODE-07",
    msg: "Suspicious setns() in container:ctx-1a4b",
    sev: "threat",
    action: "ISOLATED",
  },
  {
    node: "NODE-02",
    msg: "Unauthorized connect() :4444 from /bin/bash",
    sev: "threat",
    action: "KILLED",
  },
  {
    node: "NODE-11",
    msg: "Syscall baseline nominal",
    sev: "ok",
    action: "OBSERVED",
  },
  {
    node: "NODE-04",
    msg: "Policy hit: cap_sys_admin in user NS",
    sev: "warn",
    action: "QUARANTINED",
  },
  {
    node: "NODE-09",
    msg: "Forensic vault sealed · block #4A7E",
    sev: "ok",
    action: "SEALED",
  },
  {
    node: "NODE-03",
    msg: "Behavioral deviation +2.8σ on pid 8421",
    sev: "warn",
    action: "TAGGED",
  },
  {
    node: "NODE-14",
    msg: "Runtime heartbeat 12ms",
    sev: "ok",
    action: "HEALTHY",
  },
  {
    node: "NODE-06",
    msg: "Kernel probe re-armed on cpu:3",
    sev: "ok",
    action: "ARMED",
  },
  {
    node: "NODE-12",
    msg: "Inbound exec: /proc/self/exe — anomaly",
    sev: "threat",
    action: "CONTAINED",
  },
];

function fmtTime(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(
    d.getUTCSeconds()
  )}`;
}

export function SentinelFeed() {
  return (
    <section
      id="sentinel"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-40"
    >
      <Reveal className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-cyan/60" />
            <span className="label-mono text-cyan/80">LIVE SECURITY FEED</span>
            <span
              className="font-arabic text-[11px] text-cyan/50"
              dir="rtl"
            >
              تغذية أمنية حيّة
            </span>
          </div>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2.4rem,5vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
            The <em className="italic text-cyan/85">Sentinel</em>, always
            watching.
          </h2>
          <h3
            className="font-arabic text-[clamp(1.05rem,2vw,1.5rem)] font-semibold text-cyan/70"
            dir="rtl"
          >
            الحارس — لا ينام.
          </h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-status-ok/30 bg-status-ok/5 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-ok/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-ok" />
          </span>
          <span className="label-mono text-[10px] text-status-ok">
            SOC LIVE · SOVEREIGN
          </span>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <div className="glass-strong corner-mark relative overflow-hidden rounded-2xl p-6 md:p-8">
          {/* Top bar */}
          <TopBar />

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
            {/* Left: Node grid */}
            <div className="relative rounded-xl border border-white/[0.06] bg-void/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Radio className="h-3.5 w-3.5 text-cyan" strokeWidth={1.5} />
                  <span className="label-mono text-white/70">
                    NODE MATRIX · 16 FABRIC POINTS
                  </span>
                </div>
                <span className="data-mono text-[10px] text-cyan">
                  AUTONOMOUS
                </span>
              </div>
              <NodeMatrix />
            </div>

            {/* Right: Live event feed */}
            <div className="relative flex flex-col rounded-xl border border-white/[0.06] bg-void/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity
                    className="h-3.5 w-3.5 text-cyan"
                    strokeWidth={1.5}
                  />
                  <span className="label-mono text-white/70">
                    EVENT STREAM · LIVE
                  </span>
                </div>
                <span className="data-mono text-[10px] text-white/60">
                  evt/s 218K
                </span>
              </div>
              <EventFeed />
            </div>
          </div>

          {/* Footer metrics */}
          <MetricsStrip />
        </div>
      </Reveal>
    </section>
  );
}

function TopBar() {
  return (
    <div className="flex flex-col gap-3 border-b border-white/[0.06] pb-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan/30 bg-cyan/5">
          <Shield className="h-4 w-4 text-cyan" strokeWidth={1.5} />
        </div>
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-[15px] font-medium tracking-[-0.02em]">
              Sentinel Operations Center
            </span>
            <span className="label-mono rounded-sm border border-cyan/30 bg-cyan/5 px-1.5 py-0.5 text-[9px] text-cyan">
              L5 · SOVEREIGN
            </span>
          </div>
          <span className="label-mono text-[9.5px]">
            CLASSIFIED // RUNTIME FABRIC · REGION: JO-01
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <StatPill label="POSTURE" value="ARMED" tone="ok" />
        <StatPill label="THREATS" value="0 ACTIVE" tone="ok" />
        <StatPill label="CONTAINED" value="3 · 24H" tone="warn" />
      </div>
    </div>
  );
}

function StatPill({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn" | "threat";
}) {
  const toneCls = {
    ok: "border-status-ok/25 text-status-ok",
    warn: "border-status-warn/25 text-status-warn",
    threat: "border-status-threat/30 text-status-threat",
  }[tone];
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border bg-white/[0.015] px-2.5 py-1",
        toneCls
      )}
    >
      <span className="label-mono text-[9px] text-white/40">{label}</span>
      <span className="data-mono text-[10.5px]">{value}</span>
    </div>
  );
}

function NodeMatrix() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        threat: [3, 9].includes(i),
        warn: [6].includes(i),
      })),
    []
  );

  return (
    <div className="relative">
      {/* scanning line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
        style={{ boxShadow: "0 0 20px #00F0FF88" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />

      {/* connection lines background */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 280"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Diagonal connective tissue */}
        <path
          d="M20,40 L380,40 M20,100 L380,100 M20,160 L380,160 M20,220 L380,220"
          stroke="rgba(0,240,255,0.1)"
          strokeDasharray="2 4"
        />
        <path
          d="M60,20 L60,260 M140,20 L140,260 M220,20 L220,260 M300,20 L300,260"
          stroke="rgba(0,240,255,0.08)"
          strokeDasharray="2 4"
        />
      </svg>

      <div className="relative grid grid-cols-4 gap-3 md:gap-4">
        {nodes.map((n) => (
          <NodeCell key={n.id} id={n.id} threat={n.threat} warn={n.warn} />
        ))}
      </div>
    </div>
  );
}

function NodeCell({
  id,
  threat,
  warn,
}: {
  id: number;
  threat: boolean;
  warn: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "group relative flex aspect-square flex-col items-center justify-center rounded-lg border bg-white/[0.015] p-2",
        threat
          ? "border-status-threat/40"
          : warn
            ? "border-status-warn/30"
            : "border-white/[0.05] hover:border-cyan/20"
      )}
      whileHover={{ y: -2 }}
    >
      {/* glow dot */}
      <motion.div
        className={cn(
          "mb-1 h-1.5 w-1.5 rounded-full",
          threat
            ? "bg-status-threat"
            : warn
              ? "bg-status-warn"
              : "bg-cyan node-glow"
        )}
        animate={{ opacity: threat ? [1, 0.4, 1] : [1, 0.65, 1] }}
        transition={{
          duration: threat ? 0.9 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={
          threat
            ? { boxShadow: "0 0 18px #ff3355, 0 0 0 2px rgba(255,51,85,0.15)" }
            : warn
              ? { boxShadow: "0 0 14px #ffb932" }
              : undefined
        }
      />
      <span className="label-mono text-[8.5px] text-white/60">
        N{String(id + 1).padStart(2, "0")}
      </span>
      <span
        className={cn(
          "data-mono mt-0.5 text-[8px]",
          threat
            ? "text-status-threat"
            : warn
              ? "text-status-warn"
              : "text-cyan/70"
        )}
      >
        {threat ? "THREAT" : warn ? "WATCH" : "OK"}
      </span>

      {/* corner ticks */}
      <span className="absolute left-1 top-1 h-1 w-1 border-l border-t border-cyan/40" />
      <span className="absolute right-1 top-1 h-1 w-1 border-r border-t border-cyan/40" />
      <span className="absolute left-1 bottom-1 h-1 w-1 border-l border-b border-cyan/40" />
      <span className="absolute right-1 bottom-1 h-1 w-1 border-r border-b border-cyan/40" />
    </motion.div>
  );
}

function EventFeed() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // seed
    const seed: Event[] = [];
    const now = new Date();
    for (let i = 0; i < 6; i++) {
      const src = EVENT_POOL[i % EVENT_POOL.length];
      const t = new Date(now.getTime() - (6 - i) * 4200);
      seed.push({
        ...src,
        id: `seed-${i}`,
        t: fmtTime(t),
      });
    }
    setEvents(seed);

    const interval = setInterval(() => {
      const src = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)];
      const ev: Event = {
        ...src,
        id: `${Date.now()}-${Math.random()}`,
        t: fmtTime(new Date()),
      };
      setEvents((prev) => [ev, ...prev].slice(0, 7));
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex-1">
      <div className="mask-fade-b flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {events.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              layout
              className={cn(
                "flex items-center gap-3 rounded-md border px-3 py-2",
                e.sev === "threat"
                  ? "border-status-threat/30 bg-status-threat/[0.04]"
                  : e.sev === "warn"
                    ? "border-status-warn/25 bg-status-warn/[0.03]"
                    : "border-white/[0.05] bg-white/[0.015]"
              )}
            >
              <SevIcon sev={e.sev} />
              <span className="data-mono text-[10px] text-white/50">
                {e.t}
              </span>
              <span className="label-mono text-[9px] text-cyan/70">
                {e.node}
              </span>
              <span className="flex-1 truncate text-[11.5px] text-white/85">
                {e.msg}
              </span>
              <span
                className={cn(
                  "label-mono shrink-0 text-[9px]",
                  e.sev === "threat"
                    ? "text-status-threat"
                    : e.sev === "warn"
                      ? "text-status-warn"
                      : "text-status-ok"
                )}
              >
                → {e.action}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SevIcon({ sev }: { sev: Severity }) {
  if (sev === "threat")
    return (
      <AlertTriangle
        className="h-3.5 w-3.5 shrink-0 text-status-threat"
        strokeWidth={2}
      />
    );
  if (sev === "warn")
    return (
      <AlertTriangle
        className="h-3.5 w-3.5 shrink-0 text-status-warn"
        strokeWidth={2}
      />
    );
  return (
    <CheckCircle2
      className="h-3.5 w-3.5 shrink-0 text-status-ok"
      strokeWidth={2}
    />
  );
}

function MetricsStrip() {
  const metrics = [
    { label: "MTTC", value: "8.4ms", sub: "Mean-Time-To-Containment" },
    { label: "THROUGHPUT", value: "218K/s", sub: "Events processed" },
    { label: "COVERAGE", value: "99.9987%", sub: "Syscall visibility" },
    { label: "UPTIME", value: "742d", sub: "Since last restart" },
  ];
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-5 md:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-1">
          <span className="label-mono text-[9px] text-white/40">{m.label}</span>
          <span className="data-mono text-[22px] font-medium tracking-tight text-white">
            {m.value}
          </span>
          <span className="text-[10.5px] text-muted">{m.sub}</span>
        </div>
      ))}
    </div>
  );
}
