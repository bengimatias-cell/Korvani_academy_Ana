import { AlertTriangle, Radar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { ListGrid } from "@/components/ListGrid";
import { ModuleFooterNav } from "@/components/ModuleFooterNav";
import { MODULO_03 } from "@/data/modulo03";
import { SectionId } from "@/data/types";

export function Modulo03({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <div>
      <SectionHeader
        numero="03"
        titulo="O que é um bom lead para a KORVANI?"
        subtitulo={MODULO_03.intro}
      />

      <div className="mb-8">
        <Callout tone="caution" eyebrow="Importante">
          {MODULO_03.aviso}
        </Callout>
      </div>

      <section className="mb-8">
        <p className="font-mono-data text-xs uppercase tracking-widest text-positive mb-4 flex items-center gap-2">
          <Radar size={13} /> Sinais positivos
        </p>
        <ListGrid items={MODULO_03.sinaisPositivos} tone="positive" icon={Radar} />
      </section>

      <section>
        <p className="font-mono-data text-xs uppercase tracking-widest text-caution mb-4 flex items-center gap-2">
          <AlertTriangle size={13} /> Sinais de atenção
        </p>
        <ListGrid items={MODULO_03.sinaisAtencao} tone="caution" icon={AlertTriangle} />
      </section>

      <ModuleFooterNav atual="modulo-03" onSelect={onSelect} />
    </div>
  );
}
