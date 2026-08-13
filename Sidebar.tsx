"use client";

import { Check, Radar, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/sections";
import { SectionId } from "@/data/types";

interface SidebarProps {
  ativo: SectionId;
  concluidos: Set<SectionId>;
  onSelect: (id: SectionId) => void;
  aberta: boolean;
  onFechar: () => void;
}

export function Sidebar({ ativo, concluidos, onSelect, aberta, onFechar }: SidebarProps) {
  const progresso = Math.round((concluidos.size / NAV_ITEMS.length) * 100);

  return (
    <>
      {aberta && (
        <button
          aria-label="Fechar menu"
          onClick={onFechar}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-[280px] border-r border-border-soft bg-bg-elevated flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          aberta ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-border-soft">
          <div className="flex items-center gap-2.5">
            <Radar size={18} className="text-signal" />
            <div>
              <p className="font-display text-sm font-semibold tracking-wide text-text leading-none">
                KORVANI<span className="text-signal">®</span>
              </p>
              <p className="font-mono-data text-[10px] text-text-faint tracking-widest uppercase mt-1">
                Academy
              </p>
            </div>
          </div>
          <button
            onClick={onFechar}
            aria-label="Fechar menu"
            className="lg:hidden text-text-faint hover:text-text"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-4 border-b border-border-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-data text-[10px] uppercase tracking-widest text-text-faint">
              Progresso da sessão
            </span>
            <span className="font-mono-data text-[10px] text-signal">{progresso}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-border-soft overflow-hidden">
            <div
              className="h-full rounded-full bg-signal transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const isAtivo = item.id === ativo;
              const isConcluido = concluidos.has(item.id);
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSelect(item.id)}
                    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isAtivo
                        ? "bg-signal-soft text-signal"
                        : "text-text-muted hover:bg-surface hover:text-text"
                    }`}
                    style={isAtivo ? { background: "var(--signal-soft)" } : undefined}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono-data text-[10px] ${
                        isConcluido
                          ? "border-positive bg-positive/20 text-positive"
                          : isAtivo
                          ? "border-signal text-signal"
                          : "border-border text-text-faint"
                      }`}
                    >
                      {isConcluido ? <Check size={11} strokeWidth={3} /> : item.numero}
                    </span>
                    <span className="truncate">{item.curto}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-border-soft">
          <p className="font-mono-data text-[10px] leading-relaxed text-text-faint">
            Treinamento de Captação
            <br />
            Uso interno · KORVANI®
          </p>
        </div>
      </aside>
    </>
  );
}
