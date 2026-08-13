import { ArrowDown, ArrowRight } from "lucide-react";
import { ETAPAS_PROCESSO } from "@/data/process";

export function ProcessFlow() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-stretch gap-1">
        {ETAPAS_PROCESSO.map((etapa, i) => (
          <div key={etapa.id} className="flex flex-col sm:flex-row sm:flex-1 items-stretch sm:items-center gap-1">
            <div
              className={`flex-1 rounded-xl border p-4 sm:p-5 transition-colors ${
                etapa.destaque
                  ? "border-signal/40 bg-signal-soft"
                  : "border-border-soft bg-bg-elevated"
              }`}
            >
              <p
                className={`font-mono-data text-[10px] uppercase tracking-widest mb-2 ${
                  etapa.destaque ? "text-signal" : "text-text-faint"
                }`}
              >
                {etapa.papel}
              </p>
              <p className="font-display text-base font-semibold text-text mb-1">
                {etapa.responsavel}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {etapa.descricao}
              </p>
            </div>
            {i < ETAPAS_PROCESSO.length - 1 && (
              <div className="hidden sm:flex items-center justify-center text-text-faint shrink-0 px-1">
                <ArrowRight size={16} />
              </div>
            )}
            {i < ETAPAS_PROCESSO.length - 1 && (
              <div className="flex sm:hidden items-center justify-center text-text-faint shrink-0 py-1 w-full">
                <ArrowDown size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
