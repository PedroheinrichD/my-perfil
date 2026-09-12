export const SITE = {
  name: "Pedro",
  role: "Desenvolvedor Web",
  title: "Pedro — Desenvolvedor Web para negócios locais",
  description:
    "Sites, sistemas e catálogos sob medida para pequenos negócios, autônomos e prestadores de serviço que querem parar de depender só do Instagram ou do WhatsApp.",
  // TODO(pedro): defina o domínio final e configure NEXT_PUBLIC_SITE_URL no ambiente de produção (Vercel).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedro-dev.vercel.app",
  locale: "pt_BR",
} as const;
