const ITEMS: { en: string; ar: string }[] = [
  { en: "SOVEREIGN BY DESIGN", ar: "سيادي بالتصميم" },
  { en: "ZERO-TRUST RUNTIME", ar: "وقت تشغيل لا تفترض الثقة" },
  { en: "AUTONOMOUS CONTAINMENT", ar: "عزل ذاتي" },
  { en: "4.2M THREAT PATTERNS", ar: "٤٫٢ مليون نمط تهديد" },
  { en: "SUB-MS DETECTION", ar: "كشف بأقل من ميلي ثانية" },
  { en: "IMMUTABLE FORENSICS", ar: "أدلة جنائية غير قابلة للتغيير" },
  { en: "KERNEL-NATIVE", ar: "أصيل في النواة" },
  { en: "CLASSIFIED · L5", ar: "مستوى تصنيف ٥" },
];

export function Ticker() {
  return (
    <section
      id="telemetry"
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/[0.06] bg-obsidian/30 py-5"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

      <div className="flex animate-ticker gap-10 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="label-mono text-[12px] text-white/55">{t.en}</span>
            <span className="h-1 w-1 rounded-full bg-cyan/60" />
            <span
              className="font-arabic text-[12px] text-cyan/50"
              dir="rtl"
            >
              {t.ar}
            </span>
            <span className="h-3 w-px bg-white/10" />
          </span>
        ))}
      </div>
    </section>
  );
}
