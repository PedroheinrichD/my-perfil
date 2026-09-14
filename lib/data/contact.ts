// TODO(pedro): troque os valores abaixo pelos seus contatos reais antes de publicar.
// Esses placeholders deixam o site funcional, mas apontam para lugar nenhum.
const WHATSAPP_NUMBER = "16997729706"; // formato: 55 + DDD + número, só dígitos
const WHATSAPP_MESSAGE = "Olá! Vi seu portfólio e quero conversar.";

export const CONTACT = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: "pedroheinrich91@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-heinrich-alves-dias-a52377314",
  github: "https://github.com/PedroheinrichD",
} as const;
