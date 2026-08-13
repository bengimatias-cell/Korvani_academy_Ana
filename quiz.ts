import { QuizQuestion } from "./types";

export const QUIZ_FINAL: QuizQuestion[] = [
  {
    id: "q1",
    pergunta: "Qual é o principal objetivo do trabalho de Ana na Captação?",
    opcoes: [
      {
        texto: "Cadastrar o maior número possível de empresas",
        boa: false,
        feedback: "⚠️ Pense novamente. Quantidade não é o objetivo — qualidade sim.",
      },
      {
        texto: "Encontrar empresas com real potencial e qualificá-las com clareza",
        boa: true,
        feedback: "✅ Boa decisão. Esse é exatamente o foco da Captação.",
      },
      {
        texto: "Fechar o maior número de contratos possível",
        boa: false,
        feedback: "⚠️ Pense novamente. Fechar contratos é responsabilidade de Brandon.",
      },
    ],
  },
  {
    id: "q2",
    pergunta: "Você encontra uma empresa sem nenhum sinal de potencial. O que fazer?",
    opcoes: [
      {
        texto: "Cadastrar mesmo assim, para não perder o contato",
        boa: false,
        feedback: "⚠️ Pense novamente. Cadastrar sem sinais reais só gera ruído para João.",
      },
      {
        texto: "Encerrar essa empresa e seguir pesquisando outras",
        boa: true,
        feedback: "✅ Boa decisão. Sem sinais de perfil, o correto é encerrar e seguir em frente.",
      },
      {
        texto: "Encaminhar direto para Brandon",
        boa: false,
        feedback: "⚠️ Pense novamente. Brandon só entra depois da qualificação de João.",
      },
    ],
  },
  {
    id: "q3",
    pergunta: "O que deve constar em um bom resumo no CRM?",
    opcoes: [
      {
        texto: "Apenas 'empresa parece boa, falar com eles'",
        boa: false,
        feedback: "⚠️ Pense novamente. Isso não dá contexto nenhum para João.",
      },
      {
        texto: "Segmento, sinais encontrados, possível necessidade e contato, quando houver",
        boa: true,
        feedback: "✅ Boa decisão. Um resumo assim permite que João entenda o lead sem falar com Ana antes.",
      },
      {
        texto: "O valor estimado do contrato que a empresa pode fechar",
        boa: false,
        feedback: "⚠️ Pense novamente. Definir valores não é papel de Ana, e não deve ser inventado.",
      },
    ],
  },
  {
    id: "q4",
    pergunta: "Um dono de empresa pergunta a Ana quanto custa um projeto da KORVANI®. O que ela deve fazer?",
    opcoes: [
      {
        texto: "Dar uma estimativa de preço para não perder a conversa",
        boa: false,
        feedback: "⚠️ Pense novamente. Prometer preços não é papel de Ana.",
      },
      {
        texto: "Explicar que essa parte será tratada nas próximas etapas com a equipe responsável",
        boa: true,
        feedback: "✅ Boa decisão. Preço e negociação são responsabilidade de Brandon, mais adiante no processo.",
      },
      {
        texto: "Inventar um valor aproximado com base em projetos parecidos",
        boa: false,
        feedback: "⚠️ Pense novamente. Isso pode gerar um compromisso que a empresa não deve assumir.",
      },
    ],
  },
  {
    id: "q5",
    pergunta: "Quando um lead está pronto para ser encaminhado a João?",
    opcoes: [
      {
        texto: "Assim que a empresa é encontrada, mesmo sem pesquisa",
        boa: false,
        feedback: "⚠️ Pense novamente. Sem pesquisa, João não tem contexto para agir.",
      },
      {
        texto: "Quando existe pesquisa, qualificação e um cadastro claro no CRM",
        boa: true,
        feedback: "✅ Boa decisão. Esse é o ponto em que o lead está pronto para a próxima etapa.",
      },
      {
        texto: "Somente depois que Ana já conversou sobre preços com a empresa",
        boa: false,
        feedback: "⚠️ Pense novamente. Conversas comerciais não fazem parte do papel de Ana.",
      },
    ],
  },
];

export const PRINCIPIOS_FINAIS = [
  "Qualidade de leads importa mais do que quantidade de contatos.",
  "Seu trabalho é encontrar empresas com potencial real, não convencer qualquer empresa.",
  "Toda pesquisa deve ser objetiva: o suficiente para decidir se vale a pena cadastrar.",
  "O CRM é a memória oficial do processo — se não está lá, não aconteceu.",
  "Um bom cadastro permite que João entenda o contexto sem falar com você antes.",
  "Preço, prazo e fechamento não são responsabilidade da Captação.",
  "Ana encontra e prepara. João conversa e qualifica. Brandon negocia e fecha.",
];
