import { ConceptItem } from "@/data/types";

export function ConceptCard({ item, index }: { item: ConceptItem; index: number }) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-signal/40 hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-lg font-semibold text-text">
          {item.termo}
        </h3>
        <span className="font-mono-data text-xs text-text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-muted mb-3">
        {item.definicao}
      </p>
      {item.exemplo && (
        <p className="text-sm leading-relaxed text-signal/90 border-t border-border-soft pt-3">
          <span className="font-mono-data text-xs text-text-faint uppercase tracking-wide mr-2">
            Exemplo
          </span>
          {item.exemplo}
        </p>
      )}
    </div>
  );
}
