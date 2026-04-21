"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const tenets = [
  {
    k: "I",
    title: "The world is reactive. MRSAD is proactive.",
    body: "We intercept threats before they become incidents. Observation without action is surveillance — we act.",
  },
  {
    k: "II",
    title: "See the runtime. Trust the kernel.",
    body: "Agents lie. Logs are stale. Only the syscall tells the truth. We operate where the truth lives.",
  },
  {
    k: "III",
    title: "Sovereign, by architecture.",
    body: "No cloud dependence. No third-party telemetry. Every decision is made inside your perimeter.",
  },
  {
    k: "IV",
    title: "Containment is not a menu.",
    body: "Threats are isolated in microseconds by deterministic policy — not a human reading a ticket.",
  },
];

export function Doctrine() {
  return (
    <section
      id="doctrine"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-40"
    >
      <Reveal className="flex items-center gap-3">
        <div className="h-px w-8 bg-cyan/60" />
        <span className="label-mono text-cyan/80">01 — DOCTRINE</span>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <blockquote className="text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-white md:text-[64px]">
            <span className="text-chrome-liquid">
              &ldquo;The world is reactive.
            </span>{" "}
            <br />
            <span className="text-cyan">MRSAD is proactive.&rdquo;</span>
            <motion.span
              className="ml-2 inline-block h-[0.9em] w-[3px] bg-cyan align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ boxShadow: "0 0 10px #00F0FF" }}
            />
          </blockquote>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            Four tenets define MRSAD. Together, they form the doctrine of an
            autonomous defense system built for infrastructure that cannot fail
            — and operators that will not compromise.
          </p>
        </Reveal>

        <StaggerGroup className="flex flex-col gap-3">
          {tenets.map((t) => (
            <StaggerItem key={t.k}>
              <motion.div
                whileHover={{ x: 4 }}
                className="glass corner-mark relative flex gap-4 p-5 transition-colors hover:border-cyan/20"
              >
                <span className="label-mono text-cyan/80">{t.k}</span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-medium tracking-[-0.02em] text-white">
                    {t.title}
                  </span>
                  <span className="text-[13px] leading-relaxed text-muted">
                    {t.body}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
