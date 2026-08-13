import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepFlow } from "@/components/StepFlow";
import { Checklist } from "@/components/Checklist";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_04 } from "@/data/modulo04";
import { SectionId } from "@/data/types";

export function Modulo04({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="04"
        titulo="Como pesquisar uma empresa"
        subtitulo={MODULO_04.intro}
      />

      <div className="grid lg:grid-cols-2 gap-10">
        <section>
          <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-5">
            Passo a passo
          </p>
          <StepFlow passos={MODULO_04.passos} />
        </section>

        <section>
          <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-5">
            Checklist de pesquisa
          </p>
          <Checklist items={MODULO_04.checklist} />
        </section>
      </div>

      <ModuleFooterNav atual="modulo-04" onSelect={onSelect} />
    </div>
  );
}
