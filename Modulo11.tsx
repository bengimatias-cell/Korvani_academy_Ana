import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { ROTINA, ROTINA_AVISO } from "@/data/modulo11";
import { SectionId } from "@/data/types";

export function Modulo11({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="11"
        titulo="Simulação de rotina"
        subtitulo="Um exemplo de como um dia de captação pode se organizar."
      />

      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 mb-6">
        <Timeline itens={ROTINA} />
      </div>

      <p className="text-xs text-text-faint font-mono-data text-center">
        {ROTINA_AVISO}
      </p>

      <ModuleFooterNav atual="modulo-11" onSelect={onSelect} />
    </div>
  );
}
