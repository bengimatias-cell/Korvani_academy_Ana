export function StepFlow({
  passos,
}: {
  passos: { titulo: string; descricao: string }[];
}) {
  return (
    <ol className="relative">
      {passos.map((passo, i) => (
        <li key={passo.titulo} className="relative flex gap-4 pb-7 last:pb-0">
          {i < passos.length - 1 && (
            <span
              className="absolute left-[15px] top-8 bottom-0 w-px"
              style={{ background: "var(--border)" }}
            />
          )}
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-bg-elevated font-mono-data text-xs text-signal">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-display text-base font-semibold text-text mb-1">
              {passo.titulo}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {passo.descricao}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
