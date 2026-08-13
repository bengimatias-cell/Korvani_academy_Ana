"use client";

import { useRef, useState } from "react";
import { Menu, Radar } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Inicio } from "@/components/modules/Inicio";
import { Modulo01 } from "@/components/modules/Modulo01";
import { Modulo02 } from "@/components/modules/Modulo02";
import { Modulo03 } from "@/components/modules/Modulo03";
import { Modulo04 } from "@/components/modules/Modulo04";
import { Modulo05 } from "@/components/modules/Modulo05";
import { Modulo06 } from "@/components/modules/Modulo06";
import { Modulo07 } from "@/components/modules/Modulo07";
import { Modulo08 } from "@/components/modules/Modulo08";
import { Modulo09 } from "@/components/modules/Modulo09";
import { Modulo10 } from "@/components/modules/Modulo10";
import { Modulo11 } from "@/components/modules/Modulo11";
import { Modulo12 } from "@/components/modules/Modulo12";
import { DesafioFinal } from "@/components/modules/DesafioFinal";
import { NAV_ITEMS } from "@/data/sections";
import { SectionId } from "@/data/types";

export default function Home() {
  const [ativo, setAtivo] = useState<SectionId>("inicio");
  const [concluidos, setConcluidos] = useState<Set<SectionId>>(new Set());
  const [menuAberto, setMenuAberto] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function selecionar(id: SectionId) {
    setConcluidos((prev) => {
      if (ativo === "inicio") return prev;
      const next = new Set(prev);
      next.add(ativo);
      return next;
    });
    setAtivo(id);
    setMenuAberto(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }

  const itemAtual = NAV_ITEMS.find((i) => i.id === ativo);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        ativo={ativo}
        concluidos={concluidos}
        onSelect={selecionar}
        aberta={menuAberto}
        onFechar={() => setMenuAberto(false)}
      />

      <div className="flex-1 lg:pl-[280px] min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border-soft bg-bg/90 backdrop-blur px-5 py-3.5 lg:hidden">
          <button
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir menu"
            className="text-text-muted hover:text-text"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Radar size={15} className="text-signal" />
            <span className="font-display text-sm font-semibold text-text">
              KORVANI<span className="text-signal">®</span> Academy
            </span>
          </div>
          {itemAtual && itemAtual.id !== "inicio" && (
            <span className="ml-auto font-mono-data text-xs text-text-faint">
              {itemAtual.numero}
            </span>
          )}
        </header>

        <main
          ref={contentRef}
          className="flex-1 px-5 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-5xl w-full mx-auto"
        >
          {ativo === "inicio" && (
            <Inicio
              concluidos={concluidos}
              onIniciar={() => selecionar("modulo-01")}
              onSelect={selecionar}
            />
          )}
          {ativo === "modulo-01" && <Modulo01 onSelect={selecionar} />}
          {ativo === "modulo-02" && <Modulo02 onSelect={selecionar} />}
          {ativo === "modulo-03" && <Modulo03 onSelect={selecionar} />}
          {ativo === "modulo-04" && <Modulo04 onSelect={selecionar} />}
          {ativo === "modulo-05" && <Modulo05 onSelect={selecionar} />}
          {ativo === "modulo-06" && <Modulo06 onSelect={selecionar} />}
          {ativo === "modulo-07" && <Modulo07 onSelect={selecionar} />}
          {ativo === "modulo-08" && <Modulo08 onSelect={selecionar} />}
          {ativo === "modulo-09" && <Modulo09 onSelect={selecionar} />}
          {ativo === "modulo-10" && <Modulo10 onSelect={selecionar} />}
          {ativo === "modulo-11" && <Modulo11 onSelect={selecionar} />}
          {ativo === "modulo-12" && <Modulo12 onSelect={selecionar} />}
          {ativo === "desafio-final" && <DesafioFinal onSelect={selecionar} />}
        </main>
      </div>
    </div>
  );
}
