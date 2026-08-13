"use client";

import { ArrowRight, Check } from "lucide-react";
import { NavItem, SectionId } from "@/data/types";

export function ModuleCard({
  item,
  concluido,
  onSelect,
}: {
  item: NavItem;
  concluido: boolean;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className="group relative flex flex-col items-start rounded-2xl border border-border bg-surface p-5 text-left transition-all hover:border-signal/40 hover:bg-surface-hover hover:-translate-y-0.5"
    >
      <div className="flex w-full items-center justify-between mb-4">
        <span className="font-mono-data text-xs text-text-faint">{item.numero}</span>
        {concluido && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-positive/15 text-positive">
            <Check size={12} strokeWidth={3} />
          </span>
        )}
      </div>
      <p className="font-display text-base font-semibold text-text leading-snug mb-3">
        {item.titulo}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono-data text-signal opacity-0 transition-opacity group-hover:opacity-100">
        Abrir módulo
        <ArrowRight size={12} />
      </span>
    </button>
  );
}
