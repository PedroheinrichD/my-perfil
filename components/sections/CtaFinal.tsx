import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { RevealHeading } from "@/lib/motion/RevealHeading";
import { Reveal } from "@/lib/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/data/contact";

export function CtaFinal() {
  return (
    <section id="contato" className="border-t border-line py-28 md:py-44">
      <div className="container-page flex flex-col items-center text-center">
        <RevealHeading
          lines={["Estou pronto para o próximo desafio."]}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper text-balance md:text-7xl"
        />

        <Reveal preset="fade-up" delay={0.25} className="mt-7 max-w-md md:mt-8">
          <p className="text-base text-paper-dim md:text-lg">
           Busco uma oportunidade de estágio ou desenvolvimento júnior para transformar conhecimento em experiência profissional e contribuir com projetos.
          </p>
        </Reveal>

        <Reveal preset="fade-up" delay={0.4} className="mt-10 md:mt-12">
          <Button href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" size="md">
            Vamos conversar
          </Button>
        </Reveal>

        <Reveal preset="fade-up" delay={0.5} className="mt-12 flex items-center gap-7 md:mt-14">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-paper-dim transition-colors hover:text-accent"
          >
            <LinkedinLogo size={22} weight="light" aria-hidden="true" />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-paper-dim transition-colors hover:text-accent"
          >
            <GithubLogo size={22} weight="light" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="E-mail"
            className="text-paper-dim transition-colors hover:text-accent"
          >
            <EnvelopeSimple size={22} weight="light" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
