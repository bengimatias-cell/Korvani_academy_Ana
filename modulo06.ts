export const MODULO_06 = {
  intro:
    "Qualificar um lead é decidir, com as informações que você tem, se vale a pena encaminhá-lo para João.",
  perguntas: [
    "A empresa possui perfil compatível com a KORVANI?",
    "Existe uma possível necessidade tecnológica?",
    "Existe algum sinal de que essa necessidade possa ser relevante?",
    "Existe um possível responsável?",
    "Temos informações suficientes para João iniciar uma abordagem?",
  ],
  aviso:
    "Não é necessário ter todas as respostas. O objetivo é decidir se vale a pena encaminhar.",
  estados: [
    {
      cor: "positive" as const,
      emoji: "🟢",
      titulo: "Prioridade",
      descricao: "Há sinais suficientes para encaminhar.",
    },
    {
      cor: "caution" as const,
      emoji: "🟡",
      titulo: "Pesquisar mais",
      descricao: "A empresa parece interessante, mas faltam informações.",
    },
    {
      cor: "negative" as const,
      emoji: "🔴",
      titulo: "Encerrar",
      descricao: "Não existe perfil ou oportunidade aparente.",
    },
  ],
};
