const BLIPS = [
  { top: "28%", left: "62%", delay: "0s", tamanho: 10 },
  { top: "58%", left: "74%", delay: "0.9s", tamanho: 7 },
  { top: "70%", left: "38%", delay: "1.8s", tamanho: 9 },
  { top: "40%", left: "24%", delay: "2.6s", tamanho: 6 },
  { top: "20%", left: "44%", delay: "3.4s", tamanho: 8 },
];

export function RadarHero() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[380px]"
      role="img"
      aria-label="Radar representando a varredura de empresas em busca de sinais de oportunidade"
    >
      {/* anéis concêntricos */}
      {[100, 76, 52, 28].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border"
          style={{
            width: `${size}%`,
            height: `${size}%`,
            top: `${(100 - size) / 2}%`,
            left: `${(100 - size) / 2}%`,
            borderColor: "var(--border)",
          }}
        />
      ))}

      {/* linhas de referência */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px" style={{ background: "var(--border-soft)" }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full" style={{ background: "var(--border-soft)" }} />
      </div>

      {/* varredura */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ animation: "radar-sweep 5.5s linear infinite" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(232,163,61,0.32), transparent 26%)",
          }}
        />
      </div>

      {/* centro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: "var(--signal)" }}
        />
      </div>

      {/* sinais captados */}
      {BLIPS.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: b.tamanho,
            height: b.tamanho,
            background: "var(--signal)",
            boxShadow: "0 0 14px 2px rgba(232,163,61,0.45)",
            animation: `blip-pulse 4.4s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
