import { RotinaItem } from "@/data/types";

export function Timeline({ itens }: { itens: RotinaItem[] }) {
  return (
    <ol className="relative">
      {itens.map((item, i) => (
        <li key={item.hora} className="relative flex gap-5 pb-6 last:pb-0">
          {i < itens.length - 1 && (
            <span
              className="absolute left-[27px] top-9 bottom-0 w-px"
              style={{ background: "var(--border)" }}
            />
          )}
          <span className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-bg-elevated font-mono-data text-[11px] text-radar">
            {item.hora}
          </span>
          <div className="pt-1.5">
            <p className="font-display text-base font-semibold text-text mb-0.5">
              {item.atividade}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {item.descricao}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
