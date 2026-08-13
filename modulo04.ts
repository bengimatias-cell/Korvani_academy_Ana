import { ChecklistItem } from "./types";

export const MODULO_04 = {
  intro:
    "Pesquisar uma empresa não precisa ser uma investigação gigantesca. A pesquisa deve ser objetiva: o suficiente para decidir se vale a pena cadastrar o lead.",
  passos: [
    { titulo: "Identificar a empresa", descricao: "Confirme o nome oficial e o que ela faz." },
    { titulo: "Pesquisar o segmento", descricao: "Entenda em qual mercado ela atua." },
    { titulo: "Conhecer os produtos/serviços", descricao: "Veja o que ela oferece aos próprios clientes." },
    { titulo: "Observar como a empresa funciona", descricao: "Site, redes sociais, atendimento, presença digital." },
    { titulo: "Procurar possíveis necessidades", descricao: "Sinais de que a tecnologia poderia ajudar." },
    { titulo: "Identificar um possível responsável", descricao: "Quem poderia ser o contato dentro da empresa." },
    { titulo: "Decidir se vale a pena cadastrar o lead", descricao: "Com base em tudo que foi encontrado." },
  ],
  checklist: [
    { id: "nome", texto: "Nome da empresa" },
    { id: "segmento", texto: "Segmento" },
    { id: "site", texto: "Site/presença digital" },
    { id: "localizacao", texto: "Localização" },
    { id: "produtos", texto: "Produtos/serviços" },
    { id: "necessidade", texto: "Possível necessidade" },
    { id: "responsavel", texto: "Possível responsável" },
    { id: "relevantes", texto: "Informações relevantes" },
  ] as ChecklistItem[],
};
