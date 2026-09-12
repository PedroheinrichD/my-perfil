export type Reason = {
  index: string;
  title: string;
  description: string;
};

export const REASONS: Reason[] = [
  {
    index: "01",
    title: "Solução sob medida",
    description:
      "Nada de template genérico adaptado às pressas. Cada projeto nasce da necessidade real do seu negócio.",
  },
  {
    index: "02",
    title: "Tecnologia atual",
    description:
      "React, Next.js e TypeScript para aplicações rápidas, responsivas e fáceis de manter no futuro.",
  },
  {
    index: "03",
    title: "Do visual ao funcionamento",
    description:
      "Interface, lógica, API, autenticação e banco de dados: o mesmo desenvolvedor do início ao fim.",
  },
  {
    index: "04",
    title: "Comunicação direta",
    description:
      "Você fala comigo, não com um atendente. As decisões do projeto passam por quem escreve o código.",
  },
  {
    index: "05",
    title: "Pensado para o negócio",
    description:
      "A tecnologia existe para resolver um problema do seu negócio, não para ser sofisticada por si só.",
  },
];
