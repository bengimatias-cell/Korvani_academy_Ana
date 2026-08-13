import { X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_09 } from "@/data/modulo09";
import { SectionId } from "@/data/types";

export function Modulo09({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader numero="09" titulo="O que Ana não deve fazer" />

      <section className="mb-8">
        <div className="grid sm:grid-cols-2 gap-3">
          {MODULO_09.erros.map((erro) => (
            <div
              key={erro}
              className="flex items-start gap-3 rounded-xl border border-negative/25 bg-negative/5 px-4 py-3.5 text-sm text-text"
            >
              <X size={16} className="text-negative shrink-0 mt-0.5" />
              {erro}
            </div>
          ))}
        </div>
      </section>

      <Callout tone="negative" eyebrow="Regra de ouro">
        {MODULO_09.destaque}
      </Callout>

      <ModuleFooterNav atual="modulo-09" onSelect={onSelect} />
    </div>
  );
}
