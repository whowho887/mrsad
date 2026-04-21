const ITEMS = [
  "SOVEREIGN BY DESIGN",
  "ZERO-TRUST RUNTIME",
  "AUTONOMOUS CONTAINMENT",
  "4.2M THREAT PATTERNS",
  "SUB-MS DETECTION",
  "IMMUTABLE FORENSICS",
  "KERNEL-NATIVE",
  "CLASSIFIED · L5",
];

export function Ticker() {
  return (
    <section
      aria-hidden="true"
      className="relative border-y border-white/[0.06] bg-obsidian/30 py-5 overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-ticker gap-14">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="label-mono text-[13px] text-white/50">{t}</span>
            <span className="flex h-1 w-1 rounded-full bg-cyan" />
          </span>
        ))}
      </div>
    </section>
  );
}
