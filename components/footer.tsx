import { Mail } from "lucide-react";

const REQUEST_EMAIL = "your@institution.edu";

export function Footer() {
  const sysLinks = [
    { en: "Doctrine", ar: "المبدأ", href: "#doctrine" },
    { en: "Architecture", ar: "المعمارية", href: "#architecture" },
    { en: "Sentinel", ar: "الحارس", href: "#sentinel" },
    { en: "Reveal", ar: "الكشف", href: "#reveal" },
  ];
  const resLinks = [
    { en: "White paper", ar: "الورقة البيضاء", href: "#" },
    { en: "Policy DSL", ar: "لغة السياسات", href: "#" },
    { en: "Runbook", ar: "دليل التشغيل", href: "#" },
    { en: "Security", ar: "الأمان", href: "#" },
  ];
  const sovLinks = [
    {
      en: "Contact",
      ar: "تواصل",
      href: `mailto:${REQUEST_EMAIL}`,
    },
    {
      en: "Request access",
      ar: "طلب وصول",
      href: `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent("MRSAD — Access Request / طلب وصول")}`,
    },
    { en: "Press", ar: "الإعلام", href: "#" },
    { en: "Legal", ar: "قانوني", href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-obsidian/30 px-6 py-14">
      {/* Decorative oversized echo */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 font-display text-[clamp(8rem,22vw,22rem)] font-black leading-none text-transparent"
        aria-hidden
        style={{
          WebkitTextStroke: "1px rgba(0,240,255,0.04)",
        }}
      >
        MRSAD
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-md border border-cyan/40" />
              <div className="absolute inset-1 rounded-[3px] bg-cyan/10" />
              <div className="relative h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#00F0FF]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[20px] font-bold tracking-[-0.03em] text-white">
                MRSAD
              </span>
              <span className="label-mono mt-1 text-[9px]">
                SOVEREIGN SENTINEL
              </span>
            </div>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted">
            Monitoring Runtime Sentinel &amp; Autonomous Defense. A sovereign
            framework for zero-trust runtimes.
          </p>
          <p
            className="max-w-xs font-arabic text-[13px] leading-[2] text-muted/85"
            dir="rtl"
          >
            نظام دفاعي مستقل للبيئات الحاوية — يراقب ويتصرف قبل أن تُشنّ الضربة
            الأولى.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Falco",
              "NATS",
              "OPA · Rego",
              "Go",
              "Docker · K8s",
              "PostgreSQL",
            ].map((c) => (
              <span
                key={c}
                className="border border-white/[0.06] bg-white/[0.02] px-2 py-1 label-mono text-[9px] text-white/60"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Request email chip */}
          <a
            href={`mailto:${REQUEST_EMAIL}`}
            className="mt-3 inline-flex w-fit items-center gap-2 border border-cyan/20 bg-cyan/[0.03] px-3 py-2 transition hover:border-cyan/60 hover:bg-cyan/[0.06]"
          >
            <Mail className="h-3.5 w-3.5 text-cyan" strokeWidth={1.5} />
            <span className="label-mono text-[10px] text-cyan/80">
              {REQUEST_EMAIL}
            </span>
          </a>
        </div>

        <FooterColumn title="System" ar="المنظومة" items={sysLinks} />
        <FooterColumn title="Resources" ar="الموارد" items={resLinks} />
        <FooterColumn title="Sovereign" ar="السيادة" items={sovLinks} />
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row md:items-center">
        <span className="label-mono text-[10px] text-white/40">
          © 2026 MRSAD · ALL RIGHTS RESERVED ·{" "}
          <span className="font-arabic text-cyan/40" dir="rtl">
            جميع الحقوق محفوظة
          </span>
        </span>
        <div className="flex items-center gap-4 label-mono text-[10px] text-white/40">
          <span>BUILD · 2026.MRSAD.01</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-status-ok live-pulse" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}

type LinkItem = { en: string; ar: string; href: string };

function FooterColumn({
  title,
  ar,
  items,
}: {
  title: string;
  ar: string;
  items: LinkItem[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <span className="label-mono text-cyan/70">{title}</span>
        <span className="font-arabic text-[10px] text-cyan/30" dir="rtl">
          {ar}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i.en}>
            <a
              href={i.href}
              className="group flex items-center justify-between text-[13px] text-white/70 transition-colors hover:text-cyan"
            >
              <span>{i.en}</span>
              <span
                className="font-arabic text-[10px] text-white/25 transition-colors group-hover:text-cyan/60"
                dir="rtl"
              >
                {i.ar}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
