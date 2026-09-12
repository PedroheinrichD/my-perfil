import Image from "next/image";
import { RevealHeading } from "@/lib/motion/RevealHeading";
import { Reveal } from "@/lib/motion/Reveal";
import { ScrollCue } from "@/lib/motion/ScrollCue";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/data/contact";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-dvh items-center pt-24 md:pt-16">
      <div className="container-page grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        <div>
          <RevealHeading
            as="h1"
            trigger="load"
            lines={["Transformo a necessidade do seu negócio", "em um site que funciona de verdade."]}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper text-balance md:text-6xl lg:text-7xl"
          />

          <Reveal preset="fade-up" delay={0.5} className="mt-7 max-w-md md:mt-8">
            <p className="text-base text-paper-dim md:text-lg">
              Sites, sistemas e catálogos sob medida para negócios que ainda dependem só do Instagram ou do
              WhatsApp.
            </p>
          </Reveal>

          <Reveal preset="fade-up" delay={0.65} className="mt-9 flex flex-wrap items-center gap-4 md:mt-10">
            <Button href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              Vamos conversar
            </Button>
            <Button href="#projetos" variant="secondary">
              Ver projetos
            </Button>
          </Reveal>
        </div>

        <Reveal preset="scale" delay={0.3} className="relative">
          <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-sharp md:max-w-none">
            <Image
              src="/perfil-pedro.png"
              alt="Pedro, desenvolvedor web, em frente ao computador em seu ambiente de trabalho"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <ScrollCue />
      </div>
    </section>
  );
}
