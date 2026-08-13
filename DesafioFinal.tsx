"use client";

import { useState } from "react";
import { PartyPopper, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { QuizFinal } from "@/components/QuizFinal";
import { QUIZ_FINAL, PRINCIPIOS_FINAIS } from "@/data/quiz";
import { SectionId } from "@/data/types";

export function DesafioFinal({ onSelect }: { onSelect: (id: SectionId) => void }) {
  const [concluido, setConcluido] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  return (
    <div>
      <SectionHeader
        numero="13"
        titulo="Desafio final"
        subtitulo="Cinco perguntas para revisar o que você aprendeu. Responda e veja o feedback na hora — nada é salvo."
      />

      <QuizFinal key={quizKey} perguntas={QUIZ_FINAL} onFinalizar={() => setConcluido(true)} />

      {concluido && (
        <div className="mt-10 animate-fade-up">
          <div className="rounded-2xl border border-signal/30 bg-signal-soft p-6 sm:p-8 text-center mb-8">
            <PartyPopper size={28} className="text-signal mx-auto mb-3" />
            <p className="font-display text-2xl font-semibold text-text mb-2">
              Você concluiu o treinamento de Captação.
            </p>
            <p className="text-sm text-text-muted max-w-md mx-auto">
              Agora você conhece o processo, os critérios de qualificação e o
              que faz um bom cadastro no CRM.
            </p>
          </div>

          <section className="mb-8">
            <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
              Princípios para lembrar
            </p>
            <ul className="space-y-2">
              {PRINCIPIOS_FINAIS.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-text"
                >
                  <span className="font-mono-data text-xs text-signal mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                setConcluido(false);
                setQuizKey((k) => k + 1);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-muted hover:text-text hover:border-text-faint transition-colors"
            >
              <RotateCcw size={14} />
              Refazer o desafio
            </button>
            <button
              onClick={() => onSelect("inicio")}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
