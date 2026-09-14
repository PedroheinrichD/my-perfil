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
    name: "Landing Page para profissional de beleza",
    category: "Sistema Web · Agendamento",
    context:
      "Uma profissional autônoma do setor de beleza precisava de uma presença digital própria para apresentar seu trabalho, seus serviços e seus resultados de forma mais profissional.",
    problem:
      "Sem uma página própria, as informações sobre serviços, resultados e formas de contato ficam espalhadas ou dependentes das redes sociais. Isso dificulta para novos clientes conhecerem o trabalho da profissional e encontrarem rapidamente uma forma de entrar em contato.",
    solution:
      "Construí uma landing page responsiva focada na apresentação da profissional, seus serviços, diferenciais, resultados e depoimentos. A página também possui chamadas estratégicas para contato via WhatsApp, facilitando o próximo passo para quem deseja contratar o serviço.",
    result:
      "O projeto exigiu transformar as informações e necessidades da profissional em uma experiência web clara e persuasiva, combinando estrutura de landing page, design responsivo, componentes React, otimização da apresentação dos serviços e chamadas para ação.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
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
    name: "Sistema de estoque para garagem",
    category: "Catálogo e Estoque · Sistema Web",
    context:
      "Garagens e lojas de seminovos costumam expor o estoque inteiro só no Instagram. Cada veículo é um post, e o cliente que quer comparar preço, ano e quilometragem precisa rolar o feed inteiro ou mandar mensagem perguntando um por um.",
    problem:
      "Sem um catálogo próprio, não dá para buscar por marca ou carroceria, comparar veículos lado a lado, nem apresentar financiamento de forma clara. Toda decisão de compra esbarra em uma conversa manual no WhatsApp.",
    solution:
      "Desenvolvi um template white-label pronto para qualquer garagem plugar sua marca: catálogo com busca e filtros por marca e carroceria, ficha detalhada de cada veículo, apresentação de financiamento e direcionamento direto para o WhatsApp no momento certo da decisão.",
    result:
      "Pensar o produto como template, e não como projeto único, mudou a forma de construir: cada tela precisa fazer sentido pronta para receber a identidade de qualquer garagem, sem retrabalho estrutural.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "mqsql2" , "Better Auth" ],
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
