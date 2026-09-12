export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "sistema-agendamento-beleza",
    name: "Sistema de Agendamento para Salão de Beleza",
    category: "Sistema Web · Agendamento",
    context:
      "Uma profissional autônoma do setor de beleza que agendava tudo pelo WhatsApp: cliente pergunta horário, ela confere a agenda no caderno ou no celular, confirma, e torce para não haver conflito.",
    problem:
      "Sem um sistema próprio, cada agendamento vira uma troca de mensagens. Não há visão real de disponibilidade, cancelar é informal e a profissional não tem controle central dos serviços nem dos horários.",
    solution:
      "Construí um sistema completo: apresentação dos serviços com preço e duração, fluxo de agendamento com disponibilidade real, cancelamento pelo próprio cliente, e um painel administrativo autenticado para gerenciar serviços e agendamentos.",
    result:
      "O projeto exigiu dominar o ciclo inteiro do produto: interface para a cliente final, autenticação para a área administrativa, e as regras de negócio que evitam conflito de horário e respeitam a duração de cada serviço no banco de dados.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "mysql2",
      "Better Auth",
      "API Routes",
    ],
    liveUrl: "https://salon-page-gold.vercel.app/",
    images: [
      {
        src: "/projects/salao-hero.png",
        alt: "Página inicial do sistema de agendamento, com apresentação da profissional e botão de agendar horário",
        width: 2560,
        height: 1600,
      },
      {
        src: "/projects/salao-mobile.png",
        alt: "Versão mobile da página inicial do sistema de agendamento",
        width: 860,
        height: 1864,
      },
    ],
    featured: true,
  },
  {
    id: "template-garagem-veiculos",
    name: "Template para Garagens e Lojas de Veículos",
    category: "Catálogo e Estoque · Sistema Web",
    context:
      "Garagens e lojas de seminovos costumam expor o estoque inteiro só no Instagram. Cada veículo é um post, e o cliente que quer comparar preço, ano e quilometragem precisa rolar o feed inteiro ou mandar mensagem perguntando um por um.",
    problem:
      "Sem um catálogo próprio, não dá para buscar por marca ou carroceria, comparar veículos lado a lado, nem apresentar financiamento de forma clara. Toda decisão de compra esbarra em uma conversa manual no WhatsApp.",
    solution:
      "Desenvolvi um template white-label pronto para qualquer garagem plugar sua marca: catálogo com busca e filtros por marca e carroceria, ficha detalhada de cada veículo, apresentação de financiamento e direcionamento direto para o WhatsApp no momento certo da decisão.",
    result:
      "Pensar o produto como template, e não como projeto único, mudou a forma de construir: cada tela precisa fazer sentido pronta para receber a identidade de qualquer garagem, sem retrabalho estrutural.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://veiculos-garagem.vercel.app/",
    images: [
      {
        src: "/projects/garagem-estoque.png",
        alt: "Página de estoque do template, com filtros por marca e carroceria e grade de veículos",
        width: 2560,
        height: 1600,
      },
      {
        src: "/projects/garagem-hero.png",
        alt: "Página inicial do template para garagens, com destaque para um veículo e botões de ver estoque e falar no WhatsApp",
        width: 2560,
        height: 1600,
      },
      {
        src: "/projects/garagem-mobile.png",
        alt: "Versão mobile da página inicial do template para garagens",
        width: 860,
        height: 1864,
      },
    ],
    featured: true,
  },
];
