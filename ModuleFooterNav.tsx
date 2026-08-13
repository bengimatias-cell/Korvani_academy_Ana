import { ArrowLeft, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/sections";
import { SectionId } from "@/data/types";

export function ModuleFooterNav({
  atual,
  onSelect,
}: {
  atual: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  const index = NAV_ITEMS.findIndex((i) => i.id === atual);
  const anterior = index > 0 ? NAV_ITEMS[index - 1] : null;
  const proximo = index < NAV_ITEMS.length - 1 ? NAV_ITEMS[index + 1] : null;

  return (
    <div className="mt-14 flex items-center justify-between gap-4 border-t border-border-soft pt-6">
      {anterior ? (
        <button
          onClick={() => onSelect(anterior.id)}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
        >
          <ArrowLeft size={15} />
          <span>{anterior.curto}</span>
        </button>
      ) : (
        <span />
      )}
      {proximo && (
        <button
          onClick={() => onSelect(proximo.id)}
          className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          <span>{proximo.curto}</span>
          <ArrowRight size={15} />
        </button>
      )}
    </div>
  );
}
