import { Browser, GearSix, SquaresFour, Plugs } from "@phosphor-icons/react/dist/ssr";
import { RevealHeading } from "@/lib/motion/RevealHeading";
import { RevealGroup } from "@/lib/motion/RevealGroup";
import { SERVICES } from "@/lib/data/services";

const ICONS = {
  sites: Browser,
  sistemas: GearSix,
  catalogos: SquaresFour,
  integracoes: Plugs,
};

const REGULAR_TILE_POSITIONS = [
  "md:col-start-3 md:row-start-1",
  "md:col-start-3 md:row-start-2",
  "md:col-span-3",
];

export function Services() {
  const [featured, ...rest] = SERVICES;
  if (!featured) return null;

  return (
    <section id="servicos" className="py-24 md:py-36">
      <div className="container-page">
        <RevealHeading
          lines={["O que eu construo para o seu negócio"]}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-5xl"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:auto-rows-[200px]">
          <ServiceTile
            service={featured}
            className="md:col-span-2 md:row-span-2"
            large
          />
          {rest.map((service, i) => (
            <ServiceTile key={service.id} service={service} className={REGULAR_TILE_POSITIONS[i]} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ServiceTile({
  service,
  className = "",
  large = false,
}: {
  service: (typeof SERVICES)[number];
  className?: string;
  large?: boolean;
}) {
  const Icon = ICONS[service.id as keyof typeof ICONS];

  return (
    <div
      data-reveal-item
      className={`flex flex-col justify-between rounded-sharp border border-line bg-ink-raised p-7 md:p-9 ${className}`}
    >
      <Icon size={28} className="text-accent" aria-hidden="true" weight="light" />
      <div className="mt-8">
        <h3 className={`font-display font-semibold text-paper ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {service.title}
        </h3>
        <p className={`mt-3 text-paper-dim ${large ? "max-w-md text-base" : "text-sm"}`}>
          {service.description}
        </p>
      </div>
    </div>
  );
}
