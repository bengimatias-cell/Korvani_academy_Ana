"use client";

import { ArrowRight, Target } from "lucide-react";
import { RadarHero } from "@/components/RadarHero";
import { ProcessFlow } from "@/components/ProcessFlow";
import { NAV_ITEMS } from "@/data/sections";
import { ModuleCard } from "@/components/ModuleCard";
import { SectionId } from "@/data/types";

export function Inicio({
  concluidos,
  onIniciar,
  onSelect,
}: {
  concluidos: Set<SectionId>;
  onIniciar: () => void;
  onSelect: (id: SectionId) => void;
}) {
  const modulos = NAV_ITEMS.filter(
    (i) => i.id !== "inicio" && i.id !== "desafio-final"
  );

  return (
    <div className="animate-fade-up">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
        <div>
          <p className="font-mono-data text-xs tracking-widest uppercase text-signal mb-4">
            KORVANI® Academy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text mb-3">
            Treinamento de Captação
          </h1>
          <p className="text-lg text-text-muted mb-2">Olá, Ana 👋</p>
          <p className="text-base leading-relaxed text-text-muted max-w-xl mb-8">
            Este treinamento vai te ensinar, passo a passo, como executar sua
            função dentro do processo comercial da KORVANI®: encontrar
            empresas com potencial real, investigá-las e prepará-las para a
            próxima etapa com João.
          </p>

          <div className="flex items-center gap-3 rounded-2xl border border-signal/25 bg-signal-soft px-5 py-4 mb-8 max-w-xl">
            <Target size={18} className="text-signal shrink-0" />
            <p className="text-sm text-text leading-relaxed">
              <strong className="font-semibold">Qualidade de leads</strong> →{" "}
              <strong className="font-semibold">oportunidades reais</strong> →{" "}
              <strong className="font-semibold">processo organizado</strong>.
              Esse é o objetivo — não a quantidade de contatos.
            </p>
          </div>

          <button
            onClick={onIniciar}
            className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Começar treinamento
            <ArrowRight size={16} />
          </button>
        </div>

        <RadarHero />
      </div>

      <section className="mb-14">
        <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint mb-4">
          O processo comercial da KORVANI®
        </p>
        <ProcessFlow />
        <p className="text-sm text-text-faint mt-4">
          Ana atua na primeira etapa — a captação. Tudo que ela pesquisa e
          registra se torna a base do trabalho de João, Brandon e do Dr.
          Alexandre mais adiante.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono-data text-xs uppercase tracking-widest text-text-faint">
            Módulos do treinamento
          </p>
          <p className="font-mono-data text-xs text-text-faint">
            {concluidos.size}/{NAV_ITEMS.length} concluídos
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {modulos.map((item) => (
            <ModuleCard
              key={item.id}
              item={item}
              concluido={concluidos.has(item.id)}
              onSelect={onSelect}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
