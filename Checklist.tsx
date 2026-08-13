"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { ChecklistItem } from "@/data/types";

export function Checklist({
  items,
  mensagemCompleta,
}: {
  items: ChecklistItem[];
  mensagemCompleta?: string;
}) {
  const [marcados, setMarcados] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setMarcados((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const completo = marcados.size === items.length;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <ul className="space-y-1">
        {items.map((item) => {
          const ativo = marcados.has(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-pressed={ativo}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-surface-hover"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                    ativo
                      ? "bg-signal border-signal"
                      : "border-border bg-transparent"
                  }`}
                >
                  {ativo && <Check size={13} strokeWidth={3} className="text-bg" />}
                </span>
                <span
                  className={`text-sm sm:text-base transition-colors ${
                    ativo ? "text-text-muted line-through" : "text-text"
                  }`}
                >
                  {item.texto}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {mensagemCompleta && (
        <div
          className={`mt-5 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
            completo
              ? "border-positive/30 bg-positive/10 text-positive opacity-100"
              : "border-border-soft bg-transparent text-text-faint opacity-70"
          }`}
        >
          {completo ? mensagemCompleta : "Marque os itens conforme for concluindo."}
        </div>
      )}
    </div>
  );
}
