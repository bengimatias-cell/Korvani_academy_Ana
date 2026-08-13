import { ArrowRight, ArrowDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_08 } from "@/data/modulo08";
import { FLUXO_JOAO, JOAO_RECEBE_DE_ANA, JOAO_ENTREGA_PARA_BRANDON } from "@/data/process";
import { SectionId } from "@/data/types";

export function Modulo08({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="08"
        titulo="Quando passar o lead para João"
        subtitulo={MODULO_08.intro}
      />

      <section className="mb-10">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
          <ol className="flex flex-wrap items-center gap-2 justify-center">
            {MODULO_08.fluxo.map((etapa, i) => (
              <li key={etapa} className="flex items-center gap-2">
                <span
                  className={`rounded-full border px-4 py-2 text-sm ${
                    i === MODULO_08.fluxo.length - 1
                      ? "border-signal/40 bg-signal-soft text-signal font-medium"
                      : "border-border-soft bg-bg-elevated text-text"
                  }`}
                >
                  {etapa}
                </span>
                {i < MODULO_08.fluxo.length - 1 && (
                  <ArrowRight size={14} className="text-text-faint shrink-0" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          {MODULO_08.exemploTitulo}
        </p>
        <div className="rounded-2xl border border-signal/25 bg-surface overflow-hidden">
          <div className="bg-signal-soft px-6 py-3 border-b border-signal/20">
            <p className="font-mono-data text-[10px] uppercase tracking-widest text-signal">
              Exemplo de cadastro pronto para encaminhar
            </p>
          </div>
          <dl className="divide-y divide-border-soft">
            {MODULO_08.exemploCampos.map((campo) => (
              <div key={campo.label} className="px-6 py-4 grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-4">
                <dt className="font-mono-data text-xs text-text-faint uppercase tracking-wide">
                  {campo.label}
                </dt>
                <dd className="text-sm text-text leading-relaxed">{campo.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-14">
        <p className="font-mono-data text-xs uppercase tracking-widest text-radar mb-2">
          O que acontece depois, com João
        </p>
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl mb-6">
          João não simplesmente recebe o contato e envia uma mensagem. O
          trabalho dele é transformar um lead pesquisado em uma oportunidade
          comercial melhor compreendida — por isso o que Ana registra importa
          tanto.
        </p>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 mb-6">
          <p className="font-mono-data text-[10px] uppercase tracking-widest text-text-faint mb-4">
            Fluxo de João
          </p>
          <ol className="space-y-2">
            {FLUXO_JOAO.map((passo, i) => (
              <li key={passo} className="flex items-start gap-3 text-sm text-text">
                <span className="font-mono-data text-xs text-radar mt-0.5 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {passo}
              </li>
            ))}
          </ol>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-mono-data text-[10px] uppercase tracking-widest text-signal mb-3">
              João recebe de Ana
            </p>
            <ul className="space-y-1.5">
              {JOAO_RECEBE_DE_ANA.map((item) => (
                <li key={item} className="text-sm text-text-muted">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-mono-data text-[10px] uppercase tracking-widest text-radar mb-3">
              João entrega para Brandon
            </p>
            <ul className="space-y-1.5">
              {JOAO_ENTREGA_PARA_BRANDON.map((item) => (
                <li key={item} className="text-sm text-text-muted">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border-soft bg-bg-elevated p-5 sm:p-6">
          <div className="grid sm:grid-cols-3 gap-3 items-center text-center">
            <div className="rounded-xl border border-signal/30 bg-signal-soft px-4 py-3">
              <p className="font-mono-data text-[10px] text-signal mb-1">ANA</p>
              <p className="text-xs text-text-muted">Encontra e prepara</p>
            </div>
            <div className="flex items-center justify-center text-text-faint">
              <ArrowRight size={16} className="hidden sm:block" />
              <ArrowDown size={16} className="sm:hidden" />
            </div>
            <div className="rounded-xl border border-radar/30 bg-radar-soft px-4 py-3" style={{ background: "var(--radar-soft)", borderColor: "rgba(76,144,166,0.3)" }}>
              <p className="font-mono-data text-[10px] text-radar mb-1">JOÃO</p>
              <p className="text-xs text-text-muted">Conversa e qualifica</p>
            </div>
          </div>
        </div>
      </section>

      <ModuleFooterNav atual="modulo-08" onSelect={onSelect} />
    </div>
  );
}
