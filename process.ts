export interface EtapaProcesso {
  id: string;
  responsavel: string;
  papel: string;
  descricao: string;
  destaque?: boolean;
}

export const ETAPAS_PROCESSO: EtapaProcesso[] = [
  {
    id: "captacao",
    responsavel: "Ana",
    papel: "Captação",
    descricao: "Encontra e prepara. Pesquisa, investiga e qualifica empresas.",
    destaque: true,
  },
  {
    id: "atendimento",
    responsavel: "João",
    papel: "Atendimento e abordagem",
    descricao: "Conversa e qualifica. Aprofunda a conversa e descobre a necessidade.",
  },
  {
    id: "comercial",
    responsavel: "Brandon",
    papel: "Comercial e administração",
    descricao: "Negocia e fecha. Conduz proposta, valores e fechamento.",
  },
  {
    id: "projetos",
    responsavel: "Dr. Alexandre + Brandon",
    papel: "Projetos",
    descricao: "Executam o projeto contratado pelo cliente.",
  },
];

export const FLUXO_JOAO = [
  "Receber o lead de Ana",
  "Revisar as informações no CRM",
  "Entender o contexto da empresa",
  "Realizar o primeiro contato",
  "Iniciar uma conversa profissional",
  "Entender as necessidades do potencial cliente",
  "Fazer perguntas para descobrir problemas e necessidades",
  "Identificar se existe interesse real",
  "Identificar se existe uma oportunidade comercial",
  "Registrar as informações da conversa no CRM",
  "Encaminhar a oportunidade qualificada para Brandon",
];

export const JOAO_RECEBE_DE_ANA = [
  "Nome da empresa",
  "Segmento",
  "Informações relevantes da pesquisa",
  "Possível necessidade identificada",
  "Nome do contato, quando disponível",
  "Cargo, quando disponível",
  "Canal de contato",
  "Observações importantes",
];

export const JOAO_ENTREGA_PARA_BRANDON = [
  "O que o cliente precisa",
  "Qual problema ou necessidade foi identificado",
  "Nível de interesse",
  "Informações relevantes da conversa",
  "Possível solução ou tipo de projeto, quando já for possível identificar",
  "Próximo passo recomendado",
  "Todas as informações importantes registradas no CRM",
];
