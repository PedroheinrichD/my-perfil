import { RevealHeading } from "@/lib/motion/RevealHeading";
import { Reveal } from "@/lib/motion/Reveal";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="container-page max-w-3xl">
        <RevealHeading
          lines={["Sobre"]}
          as="h2"
          className="font-display text-3xl font-semibold tracking-tight text-paper md:text-5xl"
        />

        <Reveal preset="fade-up" delay={0.1} className="mt-8 md:mt-10">
          <p className="text-xl leading-relaxed text-paper md:text-2xl">
            Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor web, com foco em React,
            Next.js e TypeScript.
          </p>
        </Reveal>

        <Reveal preset="fade-up" delay={0.2} className="mt-6">
          <p className="max-w-2xl text-base leading-relaxed text-paper-dim md:text-lg">
            Construo sites e sistemas para negócios reais enquanto aprofundo o lado full-stack: banco de
            dados, autenticação e arquitetura. O objetivo é entregar produtos que funcionam de verdade para
            quem precisa deles, não apenas código bonito.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
