import { RotinaItem } from "./types";

export const ROTINA_AVISO =
  "Isso é apenas um exemplo de rotina e não deve ser tratado como horário obrigatório.";

export const ROTINA: RotinaItem[] = [
  { hora: "09:00", atividade: "Pesquisar empresas", descricao: "Buscar novas empresas por segmento e localização." },
  { hora: "10:00", atividade: "Investigar leads", descricao: "Aprofundar a pesquisa sobre os contatos mais promissores." },
  { hora: "11:00", atividade: "Qualificar", descricao: "Avaliar prioridade de cada lead investigado." },
  { hora: "12:00", atividade: "Registrar CRM", descricao: "Atualizar os cadastros com o resumo da pesquisa." },
  { hora: "14:00", atividade: "Continuar prospecção", descricao: "Seguir buscando empresas em novos segmentos." },
  { hora: "15:00", atividade: "Revisar leads", descricao: "Conferir se os cadastros estão completos e claros." },
  { hora: "16:00", atividade: "Encaminhar oportunidades para João", descricao: "Enviar os leads prontos para a próxima etapa." },
];
