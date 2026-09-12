// TODO(pedro): troque os valores abaixo pelos seus contatos reais antes de publicar.
// Esses placeholders deixam o site funcional, mas apontam para lugar nenhum.
const WHATSAPP_NUMBER = "5500000000000"; // formato: 55 + DDD + número, só dígitos
const WHATSAPP_MESSAGE = "Olá! Vi seu portfólio e quero conversar sobre um projeto.";

export const CONTACT = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: "seuemail@dominio.com",
  linkedin: "https://www.linkedin.com/in/seu-usuario",
  github: "https://github.com/seu-usuario",
} as const;
