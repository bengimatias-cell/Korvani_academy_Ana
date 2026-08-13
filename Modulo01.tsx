import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ProcessFlow } from "@/components/ProcessFlow";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_01 } from "@/data/modulo01";
import { SectionId } from "@/data/types";
import { ArrowRight, X } from "lucide-react";

export function Modulo01({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="01"
        titulo="O seu papel na KORVANI"
        subtitulo={MODULO_01.intro}
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono-data text-xs uppercase tracking-widest text-signal mb-3">
            Sua responsabilidade
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            {MODULO_01.responsabilidade}
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono-data text-xs uppercase tracking-widest text-radar mb-3">
            O que você entrega para João
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            {MODULO_01.entrega}
          </p>
        </div>
      </div>

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          O fluxo de Ana
        </p>
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
          <ol className="flex flex-wrap items-center gap-2">
            {MODULO_01.fluxo.map((etapa, i) => (
              <li key={etapa} className="flex items-center gap-2">
                <span className="rounded-full border border-border-soft bg-bg-elevated px-3.5 py-2 text-sm text-text">
                  {etapa}
                </span>
                {i < MODULO_01.fluxo.length - 1 && (
                  <ArrowRight size={14} className="text-text-faint shrink-0" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Onde Ana se encaixa no processo
        </p>
        <ProcessFlow />
      </section>

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-negative mb-4">
          Você NÃO precisa
        </p>
        <ul className="grid sm:grid-cols-2 gap-2">
          {MODULO_01.naoPrecisa.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-negative/20 bg-surface px-4 py-3 text-sm text-text"
            >
              <X size={15} className="text-negative shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Callout eyebrow="Lembre-se">{MODULO_01.destaque}</Callout>

      <ModuleFooterNav atual="modulo-01" onSelect={onSelect} />
    </div>
  );
}
