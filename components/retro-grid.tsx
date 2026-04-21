export function RetroGrid() {
  return (
    <div className="retro-grid" aria-hidden="true">
      <div className="retro-grid-inner" />
      {/* Horizon glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,240,255,0.8), transparent)",
          boxShadow: "0 0 40px rgba(0,240,255,0.45)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,240,255,0.08), transparent 70%)",
        }}
      />
    </div>
  );
}
