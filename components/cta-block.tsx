"use client";

import { Reveal } from "./reveal";
import { BeamButton } from "./beam-button";

export function CtaBlock() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <div className="glass-strong corner-mark relative overflow-hidden rounded-2xl p-10 md:p-16">
          {/* Retro grid behind */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,240,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              mask: "radial-gradient(ellipse 60% 80% at 50% 50%, #000, transparent 75%)",
              WebkitMask:
                "radial-gradient(ellipse 60% 80% at 50% 50%, #000, transparent 75%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,240,255,0.12), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-cyan/60" />
              <span className="label-mono text-cyan/80">
                04 — DEPLOY THE SENTINEL
              </span>
              <div className="h-px w-8 bg-cyan/60" />
            </div>
            <h2 className="max-w-3xl text-balance text-[44px] font-semibold leading-[1] tracking-[-0.04em] text-white md:text-[72px]">
              Your runtime deserves a{" "}
              <span className="text-chrome-liquid">sovereign defender.</span>
            </h2>
            <p className="max-w-xl text-[16px] leading-relaxed text-muted">
              MRSAD is deployed to a selected cohort of sovereign and critical
              infrastructure operators. Request a secure channel and we will
              initiate the handshake.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
              <BeamButton variant="primary">Initiate Handshake</BeamButton>
              <BeamButton variant="ghost" icon={false}>
                Download White Paper
              </BeamButton>
            </div>
            <div className="mt-6 flex items-center gap-3 label-mono text-[10px] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-status-ok" />
              <span>CLASSIFICATION: SOVEREIGN RESTRICTED</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>BUILD 2026.MRSAD.01</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
