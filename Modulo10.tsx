import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScenarioCard } from "@/components/ScenarioCard";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { CENARIOS } from "@/data/modulo10";
import { SectionId } from "@/data/types";

export function Modulo10({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="10"
        titulo="Casos práticos"
        subtitulo="Situações reais do dia a dia da captação. Escolha uma opção e veja o feedback na hora."
      />

      <div className="space-y-6">
        {CENARIOS.map((cenario, i) => (
          <ScenarioCard key={cenario.id} cenario={cenario} index={i} />
        ))}
      </div>

      <ModuleFooterNav atual="modulo-10" onSelect={onSelect} />
    </div>
  );
}
