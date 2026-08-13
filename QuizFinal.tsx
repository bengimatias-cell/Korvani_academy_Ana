"use client";

import { useState } from "react";
import { QuizQuestion } from "@/data/types";

export function QuizFinal({
  perguntas,
  onFinalizar,
}: {
  perguntas: QuizQuestion[];
  onFinalizar?: () => void;
}) {
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [avisado, setAvisado] = useState(false);

  function responder(perguntaId: string, index: number) {
    setRespostas((prev) => {
      const next = { ...prev, [perguntaId]: index };
      if (Object.keys(next).length === perguntas.length && !avisado) {
        setAvisado(true);
        onFinalizar?.();
      }
      return next;
    });
  }

  const totalRespondidas = Object.keys(respostas).length;
  const concluido = totalRespondidas === perguntas.length;

  return (
    <div className="space-y-6">
      {perguntas.map((pergunta, qi) => {
        const respondidaIndex = respostas[pergunta.id];
        return (
          <div
            key={pergunta.id}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <p className="font-mono-data text-xs text-signal mb-2">
              PERGUNTA {qi + 1} DE {perguntas.length}
            </p>
            <p className="font-display text-lg font-semibold text-text mb-4">
              {pergunta.pergunta}
            </p>
            <div className="grid gap-2">
              {pergunta.opcoes.map((opcao, oi) => {
                const isEscolhida = respondidaIndex === oi;
                const mostrarEstado = respondidaIndex !== undefined;
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={mostrarEstado}
                    onClick={() => responder(pergunta.id, oi)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      mostrarEstado
                        ? isEscolhida
                          ? opcao.boa
                            ? "border-positive/40 bg-positive/10 text-text"
                            : "border-caution/40 bg-caution/10 text-text"
                          : "border-border-soft text-text-faint opacity-50"
                        : "border-border hover:border-signal/40 hover:bg-surface-hover cursor-pointer text-text"
                    }`}
                  >
                    {opcao.texto}
                  </button>
                );
              })}
            </div>
            {respondidaIndex !== undefined && (
              <p
                className={`mt-3 text-sm leading-relaxed animate-fade-up ${
                  pergunta.opcoes[respondidaIndex].boa ? "text-positive" : "text-caution"
                }`}
              >
                {pergunta.opcoes[respondidaIndex].feedback}
              </p>
            )}
          </div>
        );
      })}

      {!concluido && (
        <p className="text-center text-xs font-mono-data text-text-faint">
          {totalRespondidas} de {perguntas.length} respondidas
        </p>
      )}
    </div>
  );
}
