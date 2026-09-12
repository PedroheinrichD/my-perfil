import { EnvelopeSimple, WhatsappLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { CONTACT } from "@/lib/data/contact";
import { SITE } from "@/lib/data/site";

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: CONTACT.whatsapp, Icon: WhatsappLogo },
  { label: "LinkedIn", href: CONTACT.linkedin, Icon: LinkedinLogo },
  { label: "GitHub", href: CONTACT.github, Icon: GithubLogo },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-paper">{SITE.name}</p>
          <p className="mt-1 text-sm text-paper-dim">{SITE.role} · disponível para novos projetos</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-accent"
            >
              <Icon size={18} weight="light" aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-accent"
          >
            <EnvelopeSimple size={18} weight="light" aria-hidden="true" />
            E-mail
          </a>
        </div>

        <p className="font-mono text-xs text-paper-faint">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
