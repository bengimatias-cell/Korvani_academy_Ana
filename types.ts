export type SectionId =
  | "inicio"
  | "modulo-01"
  | "modulo-02"
  | "modulo-03"
  | "modulo-04"
  | "modulo-05"
  | "modulo-06"
  | "modulo-07"
  | "modulo-08"
  | "modulo-09"
  | "modulo-10"
  | "modulo-11"
  | "modulo-12"
  | "desafio-final";

export interface NavItem {
  id: SectionId;
  numero: string;
  titulo: string;
  curto: string;
}

export interface ConceptItem {
  termo: string;
  definicao: string;
  exemplo?: string;
}

export interface ChecklistItem {
  id: string;
  texto: string;
}

export type ScenarioOptionKey = "A" | "B" | "C" | "D";

export interface ScenarioOption {
  key: ScenarioOptionKey;
  texto: string;
  correta: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  titulo: string;
  contexto: string;
  dados: { label: string; valor: string }[];
  pergunta: string;
  opcoes: ScenarioOption[];
}

export interface QuizQuestion {
  id: string;
  pergunta: string;
  opcoes: {
    texto: string;
    boa: boolean;
    feedback: string;
  }[];
}

export interface RotinaItem {
  hora: string;
  atividade: string;
  descricao: string;
}
