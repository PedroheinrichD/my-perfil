import { RevealHeading } from "@/lib/motion/RevealHeading";
import { RevealGroup } from "@/lib/motion/RevealGroup";
import { REASONS } from "@/lib/data/reasons";

export function WhyHireMe() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-page">
        <RevealHeading
          lines={["Por que trabalhar comigo"]}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-5xl"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-20 md:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.index} data-reveal-item className="flex gap-5">
              <span className="font-mono text-sm text-accent">{reason.index}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-paper">{reason.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper-dim">{reason.description}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
