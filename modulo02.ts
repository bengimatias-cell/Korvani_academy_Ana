import { ConceptItem } from "./types";

export const MODULO_02 = {
  definicaoLead:
    "Lead é uma pessoa ou empresa que pode representar uma possível oportunidade comercial para a KORVANI®.",
  conceitos: [
    {
      termo: "Contato",
      definicao:
        "Um nome, empresa ou canal que você localizou, mas ainda não avaliou. Ainda não sabemos se tem qualquer potencial.",
      exemplo: "Uma empresa que apareceu numa busca no Google Maps.",
    },
    {
      termo: "Lead",
      definicao:
        "Um contato que já demonstra algum sinal de que pode ter potencial para a KORVANI®, mesmo sem investigação profunda.",
      exemplo: "Uma clínica em expansão que parece organizar clientes de forma manual.",
    },
    {
      termo: "Lead qualificado",
      definicao:
        "Um lead que já foi pesquisado e avaliado por Ana, com informações suficientes para justificar o encaminhamento a João.",
      exemplo: "A mesma clínica, agora com segmento, possível necessidade e contato identificados.",
    },
    {
      termo: "Oportunidade",
      definicao:
        "Um lead qualificado que João conversou e confirmou ter interesse e necessidade real, pronto para a etapa comercial com Brandon.",
      exemplo: "A clínica confirma, em conversa com João, que quer organizar melhor o atendimento aos pacientes.",
    },
    {
      termo: "Cliente",
      definicao:
        "Uma empresa que fechou contrato com a KORVANI® e está em fase de execução de projeto.",
      exemplo: "A clínica assina o contrato e o projeto entra em desenvolvimento com Dr. Alexandre e Brandon.",
    },
  ] as ConceptItem[],
  frases: [
    "Nem todo contato é um bom lead.",
    "Nem todo lead vai virar cliente.",
  ],
};
