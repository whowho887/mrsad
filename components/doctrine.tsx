"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const tenets = [
  {
    k: "I",
    title: "The world is reactive. MRSAD is proactive.",
    ar: "العالم يتفاعل مع الحدث. مرصاد يسبقه.",
    body: "We intercept threats before they become incidents. Observation without action is surveillance — we act.",
    arBody:
      "نعترض التهديدات قبل أن تصبح حوادث. المراقبة دون تصرّف مجرد مشاهدة — نحن نُنفّذ.",
  },
  {
    k: "II",
    title: "See the runtime. Trust the kernel.",
    ar: "انظر إلى وقت التشغيل. ثِق بالنواة.",
    body: "Agents lie. Logs are stale. Only the syscall tells the truth. We operate where the truth lives.",
    arBody:
      "الوكلاء يكذبون. السجلات تتأخر. استدعاء النظام وحده يقول الحقيقة. نعمل حيث تسكن الحقيقة.",
  },
  {
    k: "III",
    title: "Sovereign, by architecture.",
    ar: "سيادي — بالتصميم.",
    body: "No cloud dependence. No third-party telemetry. Every decision is made inside your perimeter.",
    arBody:
      "لا اعتماد على السحابة. لا قياسات طرف ثالث. كل قرار يُتَّخذ داخل نطاقك السيادي.",
  },
  {
    k: "IV",
    title: "Containment is not a menu.",
    ar: "العزل ليس خياراً من قائمة.",
    body: "Threats are isolated in microseconds by deterministic policy — not a human reading a ticket.",
    arBody:
      "تُعزَل التهديدات في ميكروثانية بسياسة حتميّة — لا بقرارٍ بشري يقرأ تذكرة.",
  },
];

export function Doctrine() {
  return (
    <section
      id="doctrine"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-40"
    >
      {/* Decorative oversized letter in background */}
      <div
        className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(8rem,18vw,18rem)] font-black leading-none text-transparent lg:block"
        style={{ WebkitTextStroke: "1px rgba(0,240,255,0.035)" }}
        aria-hidden
      >
        &amp;
      </div>

      <Reveal className="flex items-center gap-3">
        <div className="h-px w-8 bg-cyan/60" />
        <span className="label-mono text-cyan/80">DOCTRINE</span>
        <span className="font-arabic text-[11px] text-cyan/50" dir="rtl">
          المبدأ · المانيفستو
        </span>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <blockquote className="text-balance font-display text-[clamp(2.4rem,5vw,4.4rem)] font-normal leading-[1.08] tracking-[-0.02em] text-white">
            <em className="italic text-cyan/85">
              &ldquo;While others respond
            </em>{" "}
            <br />
            <span className="text-chrome-liquid">to the threat after</span>{" "}
            <br />
            <em className="italic">it has struck,</em>
            <br />
            <span className="text-cyan">MRSAD watches and acts</span>
            <br />
            <em className="italic text-white/90">
              — before the first strike.&rdquo;
            </em>
            <motion.span
              className="ml-2 inline-block h-[0.8em] w-[3px] bg-cyan align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ boxShadow: "0 0 10px #00F0FF" }}
            />
          </blockquote>

          <p
            className="mt-8 max-w-xl border-r-2 border-cyan/25 pr-5 font-arabic text-[clamp(0.95rem,1.5vw,1.2rem)] leading-[2.1] text-muted/90"
            dir="rtl"
          >
            بينما يستجيب الآخرون للتهديد بعد وقوعه، <strong className="text-cyan/80">مرصاد</strong> يراقب ويتصرّف — قبل أن
            تُشنّ الضربة الأولى. نظام دفاعي مستقل يعمل في صمت كامل، يتسلل إلى
            طبقة وقت التشغيل حيث تتشكّل التهديدات، ويُنفّذ القرار في ميكروثانية —
            دون انتظار أمر بشري.
          </p>

          <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-muted/80">
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
                  <span
                    className="font-arabic text-[13px] leading-[1.9] text-cyan/70"
                    dir="rtl"
                  >
                    {t.ar}
                  </span>
                  <div className="mt-1 h-px bg-white/5" />
                  <span className="text-[13px] leading-relaxed text-muted">
                    {t.body}
                  </span>
                  <span
                    className="font-arabic text-[12px] leading-[1.9] text-muted/70"
                    dir="rtl"
                  >
                    {t.arBody}
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
