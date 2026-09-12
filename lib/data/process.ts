export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Entendimento",
    description: "Entender o problema e o objetivo real do seu negócio antes de abrir o editor de código.",
  },
  {
    index: "02",
    title: "Estrutura",
    description: "Definir arquitetura, conteúdo e experiência: o que o sistema precisa fazer, e em que ordem.",
  },
  {
    index: "03",
    title: "Desenvolvimento",
    description: "Construir front-end, back-end e integrações — interface, banco de dados e regras de negócio.",
  },
  {
    index: "04",
    title: "Refinamento",
    description: "Ajustar detalhes, responsividade, performance e a experiência de uso em qualquer tela.",
  },
  {
    index: "05",
    title: "Publicação",
    description: "Colocar o projeto no ar e entregar uma solução que o seu negócio já pode usar.",
  },
];
