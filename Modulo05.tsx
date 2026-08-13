import { Compass, X, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_05 } from "@/data/modulo05";
import { SectionId } from "@/data/types";

export function Modulo05({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="05"
        titulo="Como encontrar empresas"
        subtitulo={MODULO_05.intro}
      />

      <section className="mb-10">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Onde pesquisar
        </p>
        <div className="flex flex-wrap gap-2.5">
          {MODULO_05.fontes.map((fonte) => (
            <Badge key={fonte} tone="radar">
              <Compass size={11} />
              {fonte}
            </Badge>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-signal mb-4">
          Pense por segmento
        </p>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          {MODULO_05.dica}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-negative/25 bg-negative/5 p-4">
            <p className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-widest text-negative mb-3">
              <X size={12} /> Genérico demais
            </p>
            <p className="font-display text-lg text-text">
              &ldquo;{MODULO_05.exemploRuim}&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-positive/25 bg-positive/5 p-4">
            <p className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-widest text-positive mb-3">
              <Check size={12} /> Específico por segmento
            </p>
            <ul className="space-y-1.5">
              {MODULO_05.exemplosBons.map((ex) => (
                <li key={ex} className="font-display text-sm text-text">
                  &ldquo;{ex}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ModuleFooterNav atual="modulo-05" onSelect={onSelect} />
    </div>
  );
}
