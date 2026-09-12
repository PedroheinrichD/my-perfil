export type Service = {
  id: string;
  title: string;
  description: string;
  size: "featured" | "regular";
};

export const SERVICES: Service[] = [
  {
    id: "sites",
    title: "Sites e Landing Pages",
    description:
      "Páginas profissionais para apresentar sua empresa, serviço ou produto e transformar visitante em contato real.",
    size: "featured",
  },
  {
    id: "sistemas",
    title: "Sistemas Web",
    description:
      "Agendamento, cadastro, painel administrativo: sistemas sob medida para um processo específico do seu negócio.",
    size: "regular",
  },
  {
    id: "catalogos",
    title: "Catálogos e Estoques",
    description:
      "Vitrine organizada para produtos, veículos ou serviços, sem depender só do feed do Instagram.",
    size: "regular",
  },
  {
    id: "integracoes",
    title: "Integrações e Backend",
    description:
      "APIs, banco de dados e autenticação: a lógica que faz o site funcionar de verdade, não só parecer bonito.",
    size: "regular",
  },
];
