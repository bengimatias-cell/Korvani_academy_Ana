import { Database } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_07 } from "@/data/modulo07";
import { SectionId } from "@/data/types";

export function Modulo07({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader numero="07" titulo="CRM" subtitulo={MODULO_07.intro} />

      <div className="mb-10">
        <Callout tone="radar" eyebrow="Princípio">
          {MODULO_07.frase}
        </Callout>
      </div>

      <section className="mb-10">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4 flex items-center gap-2">
          <Database size={13} /> Campos do cadastro
        </p>
        <div className="rounded-2xl border border-border bg-surface p-2">
          <div className="grid sm:grid-cols-3 gap-2">
            {MODULO_07.campos.map((campo) => (
              <div
                key={campo}
                className="rounded-xl bg-bg-elevated border border-border-soft px-4 py-3"
              >
                <p className="font-mono-data text-[10px] uppercase tracking-wider text-text-faint mb-1">
                  Campo
                </p>
                <p className="text-sm text-text">{campo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Bom cadastro vs. cadastro ruim
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-positive/25 bg-positive/5 p-5">
            <p className="font-mono-data text-[10px] uppercase tracking-widest text-positive mb-3">
              ✅ Bom
            </p>
            <p className="text-sm text-text leading-relaxed">
              {MODULO_07.exemploBom}
            </p>
          </div>
          <div className="rounded-2xl border border-negative/25 bg-negative/5 p-5">
            <p className="font-mono-data text-[10px] uppercase tracking-widest text-negative mb-3">
              ❌ Ruim
            </p>
            <p className="text-sm text-text leading-relaxed">
              {MODULO_07.exemploRuim}
            </p>
          </div>
        </div>
      </section>

      <ModuleFooterNav atual="modulo-07" onSelect={onSelect} />
    </div>
  );
}
