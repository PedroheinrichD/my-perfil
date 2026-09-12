import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { ImageReveal } from "@/lib/motion/ImageReveal";
import type { Project } from "@/lib/data/projects";

const NARRATIVE_LABELS = [
  { key: "context", label: "Contexto" },
  { key: "problem", label: "Problema" },
  { key: "solution", label: "Solução" },
  { key: "result", label: "Resultado" },
] as const;

export function ProjectCase({ project }: { project: Project }) {
  const cover = project.images[0];
  const secondary = project.images.length > 1 ? project.images[project.images.length - 1] : undefined;

  return (
    <article className="container-page grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className="relative">
        <ImageReveal className="rounded-sharp border border-line">
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              className="h-auto w-full object-cover"
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          )}
        </ImageReveal>

        {secondary && (
          <div className="absolute -bottom-6 -right-4 w-[30%] min-w-24 overflow-hidden rounded-sharp border-4 border-ink shadow-2xl sm:-right-8 sm:-bottom-8">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              width={secondary.width}
              height={secondary.height}
              className="h-auto w-full object-cover"
              loading="lazy"
              sizes="20vw"
            />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">{project.name}</h3>

        <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {NARRATIVE_LABELS.map(({ key, label }) => (
            <div key={key}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-faint">{label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-paper-dim">{project[key]}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-pill border border-line-strong px-3 py-1 font-mono text-[11px] text-paper-dim"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-display text-sm font-medium text-paper transition-colors hover:text-accent"
            >
              Ver projeto ao vivo <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-display text-sm font-medium text-paper transition-colors hover:text-accent"
            >
              <GithubLogo size={16} weight="bold" aria-hidden="true" /> Código no GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
