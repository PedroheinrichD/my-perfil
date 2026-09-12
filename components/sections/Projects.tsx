import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { RevealHeading } from "@/lib/motion/RevealHeading";
import { Reveal } from "@/lib/motion/Reveal";
import { StickyStack } from "@/lib/motion/StickyStack";
import { ProjectCase } from "@/components/sections/ProjectCase";
import { PROJECTS } from "@/lib/data/projects";
import { CONTACT } from "@/lib/data/contact";

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-36">
      <div className="container-page">
        <RevealHeading
          lines={["Projetos que já resolvem", "problemas reais de negócio"]}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-5xl"
        />
      </div>

      <div className="mt-16 md:mt-20">
        <StickyStack>
          {PROJECTS.map((project) => (
            <ProjectCase key={project.id} project={project} />
          ))}
        </StickyStack>
      </div>

      <Reveal preset="fade-up" className="container-page mt-20 md:mt-28">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">Mais experimentos e interfaces</h3>
            <p className="mt-2 max-w-md text-sm text-paper-dim">
              Front-end, animações e pequenas ferramentas que uso para testar ideias fora dos projetos
              comerciais.
            </p>
          </div>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-sharp border border-line-strong px-5 py-3 font-display text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
          >
            <GithubLogo size={18} weight="bold" aria-hidden="true" />
            Ver mais no GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
