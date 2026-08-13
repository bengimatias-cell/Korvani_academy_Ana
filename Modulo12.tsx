import { SectionHeader } from "@/components/ui/SectionHeader";
import { Checklist } from "@/components/Checklist";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { CHECKLIST_FINAL, MENSAGEM_FINAL_MODULO_12 } from "@/data/modulo12";
import { SectionId } from "@/data/types";

export function Modulo12({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="12"
        titulo="Checklist final"
        subtitulo="Antes de encaminhar um lead, revise estes pontos."
      />

      <Checklist items={CHECKLIST_FINAL} mensagemCompleta={MENSAGEM_FINAL_MODULO_12} />

      <ModuleFooterNav atual="modulo-12" onSelect={onSelect} />
    </div>
  );
}
