import { Scenario } from "./types";

export const CENARIOS: Scenario[] = [
  {
    id: "caso-01",
    titulo: "Caso 01 — Empresa em crescimento",
    contexto:
      "Você encontrou uma rede de estúdios de pilates que abriu sua terceira unidade este ano. A recepção de cada unidade usa uma agenda de papel diferente, e o Instagram menciona que estão contratando mais professores.",
    dados: [
      { label: "Segmento", valor: "Bem-estar — estúdios de pilates" },
      { label: "Sinais", valor: "Expansão recente, controle manual de agenda" },
      { label: "Contato", valor: "Não identificado ainda" },
    ],
    pergunta: "O que você faria?",
    opcoes: [
      {
        key: "A",
        texto: "Cadastrar imediatamente sem pesquisar",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Existem bons sinais, mas cadastrar sem completar a pesquisa deixa João sem contexto suficiente.",
      },
      {
        key: "B",
        texto: "Pesquisar melhor a empresa e identificar possível necessidade",
        correta: true,
        feedback:
          "✅ Boa decisão. Os sinais de crescimento e controle manual justificam aprofundar a pesquisa antes de encaminhar.",
      },
      {
        key: "C",
        texto: "Passar diretamente para Brandon",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Brandon entra apenas depois que João confirma uma oportunidade real. Esse não é o papel de Ana.",
      },
      {
        key: "D",
        texto: "Ignorar a empresa",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Há sinais relevantes o suficiente para investigar antes de descartar.",
      },
    ],
  },
  {
    id: "caso-02",
    titulo: "Caso 02 — Lead que precisa de mais pesquisa",
    contexto:
      "Uma empresa de logística apareceu numa busca por 'transportadoras região sul'. O site existe, mas está incompleto, e não há informações claras sobre o tamanho da operação nem sobre quem cuida da área comercial.",
    dados: [
      { label: "Segmento", valor: "Logística e transporte" },
      { label: "Sinais", valor: "Presença digital limitada e incompleta" },
      { label: "Contato", valor: "Não identificado" },
    ],
    pergunta: "O que você faria?",
    opcoes: [
      {
        key: "A",
        texto: "Cadastrar no CRM como prioridade máxima",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Ainda faltam informações básicas para justificar prioridade alta.",
      },
      {
        key: "B",
        texto: "Buscar mais informações antes de decidir se vale a pena cadastrar",
        correta: true,
        feedback:
          "✅ Boa decisão. Quando faltam informações essenciais, o próximo passo é pesquisar mais — não descartar nem encaminhar às pressas.",
      },
      {
        key: "C",
        texto: "Encaminhar para João mesmo sem contato identificado",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Sem contato e sem contexto suficiente, João teria que refazer a pesquisa do zero.",
      },
      {
        key: "D",
        texto: "Descartar por falta de site completo",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Um site incompleto não é motivo suficiente para descartar — pode haver outros canais para pesquisar.",
      },
    ],
  },
  {
    id: "caso-03",
    titulo: "Caso 03 — Lead sem perfil",
    contexto:
      "Você encontrou uma pequena banca de jornal em um bairro residencial, administrada por uma única pessoa, sem funcionários, sem presença digital e sem sinais de crescimento.",
    dados: [
      { label: "Segmento", valor: "Comércio local de pequeníssimo porte" },
      { label: "Sinais", valor: "Nenhuma equipe, nenhuma presença digital" },
      { label: "Contato", valor: "O próprio dono" },
    ],
    pergunta: "O que você faria?",
    opcoes: [
      {
        key: "A",
        texto: "Cadastrar mesmo assim, para aumentar o número de leads do mês",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Quantidade de contatos não é o objetivo da Captação.",
      },
      {
        key: "B",
        texto: "Investigar por semanas antes de decidir",
        correta: false,
        feedback:
          "⚠️ Pense novamente. A pesquisa deve ser objetiva — os sinais aqui já indicam ausência de perfil.",
      },
      {
        key: "C",
        texto: "Encerrar. Não há sinais de perfil ou de oportunidade real",
        correta: true,
        feedback:
          "✅ Boa decisão. Sem equipe, sem operação estruturada e sem sinais de crescimento, o mais correto é encerrar essa empresa e seguir para outra.",
      },
      {
        key: "D",
        texto: "Encaminhar diretamente para João sem observações",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Encaminhar sem contexto e sem perfil real apenas transfere o problema para João.",
      },
    ],
  },
  {
    id: "caso-04",
    titulo: "Caso 04 — Empresa interessante, mas sem contato identificado",
    contexto:
      "Uma agência de marketing digital em expansão tem um site profissional, presença ativa no Instagram e menciona publicamente que está com dificuldade para organizar o funil de clientes. Você não encontrou, porém, nenhum nome de responsável comercial.",
    dados: [
      { label: "Segmento", valor: "Marketing digital" },
      { label: "Sinais", valor: "Crescimento, dificuldade declarada em organizar clientes" },
      { label: "Contato", valor: "Não identificado" },
    ],
    pergunta: "O que você faria?",
    opcoes: [
      {
        key: "A",
        texto: "Descartar, já que não há contato identificado",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Os sinais são fortes o suficiente para não descartar apenas por falta de contato.",
      },
      {
        key: "B",
        texto: "Cadastrar com os sinais encontrados e registrar que o contato ainda precisa ser identificado",
        correta: true,
        feedback:
          "✅ Boa decisão. Um lead com bons sinais pode ser cadastrado mesmo sem contato definido, desde que isso fique claro no CRM para as próximas etapas.",
      },
      {
        key: "C",
        texto: "Ligar para a empresa e tentar fechar uma reunião comercial",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Conduzir a conversa comercial é papel de João, não de Ana.",
      },
      {
        key: "D",
        texto: "Esperar até encontrar o nome exato do responsável antes de qualquer registro",
        correta: false,
        feedback:
          "⚠️ Pense novamente. Não é necessário ter todas as respostas para registrar um lead com bom potencial.",
      },
    ],
  },
];
