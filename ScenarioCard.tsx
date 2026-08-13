"use client";

import { useState } from "react";
import { Scenario, ScenarioOptionKey } from "@/data/types";

export function ScenarioCard({ cenario, index }: { cenario: Scenario; index: number }) {
  const [escolhida, setEscolhida] = useState<ScenarioOptionKey | null>(null);

  const opcaoEscolhida = cenario.opcoes.find((o) => o.key === escolhida);

  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden">
      <div className="p-6 sm:p-7 border-b border-border-soft">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-data text-xs text-signal">
            CASO {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-text mb-3">
          {cenario.titulo}
        </h3>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-5">
          {cenario.contexto}
        </p>
        <dl className="grid gap-2 sm:grid-cols-3">
          {cenario.dados.map((d) => (
            <div
              key={d.label}
              className="rounded-lg bg-bg-elevated border border-border-soft px-3 py-2"
            >
              <dt className="font-mono-data text-[10px] uppercase tracking-wider text-text-faint mb-0.5">
                {d.label}
              </dt>
              <dd className="text-xs text-text">{d.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="p-6 sm:p-7">
        <p className="font-medium text-text mb-4">{cenario.pergunta}</p>
        <div className="grid gap-2">
          {cenario.opcoes.map((opcao) => {
            const isEscolhida = escolhida === opcao.key;
            const mostrarEstado = escolhida !== null;
            return (
              <button
                key={opcao.key}
                type="button"
                disabled={escolhida !== null}
                onClick={() => setEscolhida(opcao.key)}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                  mostrarEstado
                    ? isEscolhida
                      ? opcao.correta
                        ? "border-positive/40 bg-positive/10"
                        : "border-negative/40 bg-negative/10"
                      : "border-border-soft opacity-50"
                    : "border-border hover:border-signal/40 hover:bg-surface-hover cursor-pointer"
                }`}
              >
                <span className="font-mono-data text-xs text-text-faint mt-0.5">
                  {opcao.key}
                </span>
                <span className="text-text">{opcao.texto}</span>
              </button>
            );
          })}
        </div>

        {opcaoEscolhida && (
          <div
            className={`mt-4 rounded-xl border px-4 py-3.5 text-sm leading-relaxed animate-fade-up ${
              opcaoEscolhida.correta
                ? "border-positive/30 bg-positive/10 text-positive"
                : "border-caution/30 bg-caution/10 text-caution"
            }`}
          >
            {opcaoEscolhida.feedback}
            <button
              type="button"
              onClick={() => setEscolhida(null)}
              className="block mt-2 font-mono-data text-xs underline decoration-dotted underline-offset-4 text-text-muted hover:text-text"
            >
              Tentar novamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
