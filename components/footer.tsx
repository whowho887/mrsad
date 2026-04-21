export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-obsidian/30 px-6 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-md border border-cyan/40" />
              <div className="absolute inset-1 rounded-[3px] bg-cyan/10" />
              <div className="relative h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#00F0FF]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-semibold tracking-[-0.03em] text-white">
                MRSAD
              </span>
              <span className="label-mono mt-1 text-[9px]">
                SOVEREIGN SENTINEL · v4.0
              </span>
            </div>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted">
            Monitoring Runtime Sentinel &amp; Autonomous Defense. A sovereign
            framework for zero-trust runtimes.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Kernel Sensors",
              "Policy Engine",
              "Response Core",
              "Forensic Vault",
            ].map((c) => (
              <span
                key={c}
                className="rounded-sm border border-white/[0.06] bg-white/[0.02] px-2 py-1 label-mono text-[9px] text-white/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <FooterColumn
          title="System"
          items={["Doctrine", "Architecture", "Sentinel", "Telemetry"]}
        />
        <FooterColumn
          title="Resources"
          items={["White paper", "Policy DSL", "Runbook", "Security"]}
        />
        <FooterColumn
          title="Sovereign"
          items={["Contact", "Request access", "Press", "Legal"]}
        />
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row md:items-center">
        <span className="label-mono text-[10px] text-white/40">
          © 2026 MRSAD · ALL RIGHTS RESERVED
        </span>
        <div className="flex items-center gap-4 label-mono text-[10px] text-white/40">
          <span>BUILD 2026.MRSAD.01</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-status-ok" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label-mono text-cyan/70">{title}</span>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-[13px] text-white/70 transition-colors hover:text-cyan"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
