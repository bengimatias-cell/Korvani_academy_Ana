import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ConceptCard } from "@/components/ConceptCard";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_02 } from "@/data/modulo02";
import { SectionId } from "@/data/types";

export function Modulo02({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="02"
        titulo="O que é um lead?"
        subtitulo={MODULO_02.definicaoLead}
      />

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          Da primeira busca até o cliente
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {MODULO_02.conceitos.map((item, i) => (
            <ConceptCard key={item.termo} item={item} index={i} />
          ))}
        </div>
      </section>

      <div className="grid sm:grid-cols-2 gap-4">
        {MODULO_02.frases.map((frase) => (
          <Callout key={frase} tone="radar">
            {frase}
          </Callout>
        ))}
      </div>

      <ModuleFooterNav atual="modulo-02" onSelect={onSelect} />
    </div>
  );
}
