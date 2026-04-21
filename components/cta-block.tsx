"use client";

import { Reveal } from "./reveal";
import { BeamButton } from "./beam-button";
import { Mail } from "lucide-react";

const REQUEST_EMAIL = "your@institution.edu";

export function CtaBlock() {
  const handshake = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    "MRSAD — Initiate Handshake / بدء الاتصال",
  )}&body=${encodeURIComponent(
    "Organization / الجهة:\nContact / التواصل:\nEnvironment / البيئة:\nUse-case / الغرض:\n\n— sent from mrsad",
  )}`;

  const whitePaper = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    "MRSAD — White Paper Request / طلب الورقة البيضاء",
  )}`;

  return (
    <section
      id="request"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <Reveal>
        <div className="glass-strong corner-mark relative overflow-hidden p-10 md:p-16">
          {/* Retro grid backdrop */}
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
                DEPLOY THE SENTINEL
              </span>
              <span
                className="font-arabic text-[11px] text-cyan/60"
                dir="rtl"
              >
                نشر الحارس
              </span>
              <div className="h-px w-8 bg-cyan/60" />
            </div>

            <h2 className="max-w-3xl text-balance font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
              Your runtime deserves a{" "}
              <em className="italic text-chrome-liquid">sovereign defender.</em>
            </h2>
            <p
              className="max-w-xl font-arabic text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[2] text-muted"
              dir="rtl"
            >
              يُنشر <strong className="text-cyan/80">مرصاد</strong> حصرياً على
              مجموعة مختارة من المشغّلين السياديين والبنى التحتية الحرجة. اطلب
              قناة اتصال آمنة، وسنبدأ إجراءات المصافحة.
            </p>

            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
              <BeamButton variant="primary" icon href={handshake}>
                Initiate Handshake
              </BeamButton>
              <BeamButton variant="ghost" icon={false} href={whitePaper}>
                Request White Paper
              </BeamButton>
            </div>

            {/* Inline email display */}
            <a
              href={`mailto:${REQUEST_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 border border-cyan/20 bg-cyan/[0.03] px-3.5 py-2 transition hover:border-cyan/60 hover:bg-cyan/[0.06]"
            >
              <Mail className="h-3.5 w-3.5 text-cyan" strokeWidth={1.5} />
              <span className="label-mono text-[11px] text-cyan/85">
                {REQUEST_EMAIL}
              </span>
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 label-mono text-[10px] text-white/40">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-status-ok live-pulse" />
                <span>CLASSIFICATION · SOVEREIGN RESTRICTED</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>BUILD · 2026.MRSAD.01</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
