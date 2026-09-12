import { ArrowsLeftRight, ShieldCheck, Database as DatabaseIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealHeading } from "@/lib/motion/RevealHeading";
import { RevealGroup } from "@/lib/motion/RevealGroup";
import { BrandIcon } from "@/lib/icons/BrandIcon";
import type { BrandIconSlug } from "@/lib/icons/brand-icons";
import { STACK_GROUPS, type StackItem } from "@/lib/data/stack";

const CONCEPT_ICONS = {
  ArrowsLeftRight,
  ShieldCheck,
  Database: DatabaseIcon,
};

function StackIcon({ item }: { item: StackItem }) {
  if (item.kind === "brand") {
    return <BrandIcon slug={item.icon as BrandIconSlug} size={18} />;
  }
  const Icon = CONCEPT_ICONS[item.icon as keyof typeof CONCEPT_ICONS];
  return <Icon size={18} weight="light" aria-hidden="true" />;
}

export function Stack() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-page">
        <RevealHeading
          lines={["Ferramentas que domino"]}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-5xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-4">
          {STACK_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">{group.label}</h3>
              <RevealGroup className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <div key={item.name} data-reveal-item className="flex items-center gap-2.5 text-paper-dim">
                    <StackIcon item={item} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
