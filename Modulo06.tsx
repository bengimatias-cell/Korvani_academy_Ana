import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_06 } from "@/data/modulo06";
import { SectionId } from "@/data/types";

export function Modulo06({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="06"
        titulo="Como qualificar um lead"
        subtitulo={MODULO_06.intro}
      />

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Perguntas para se fazer
        </p>
        <ol className="space-y-2">
          {MODULO_06.perguntas.map((p, i) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-text"
            >
              <span className="font-mono-data text-xs text-signal mt-0.5">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ol>
      </section>

      <div className="mb-10">
        <Callout tone="radar">{MODULO_06.aviso}</Callout>
      </div>

      <section>
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Como classificar
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {MODULO_06.estados.map((estado) => (
            <div
              key={estado.titulo}
              className={`rounded-2xl border p-5 ${
                estado.cor === "positive"
                  ? "border-positive/25 bg-positive/5"
                  : estado.cor === "caution"
                  ? "border-caution/25 bg-caution/5"
                  : "border-negative/25 bg-negative/5"
              }`}
            >
              <p className="text-2xl mb-2">{estado.emoji}</p>
              <p className="font-display font-semibold text-text mb-1.5">
                {estado.titulo}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {estado.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ModuleFooterNav atual="modulo-06" onSelect={onSelect} />
    </div>
  );
}
