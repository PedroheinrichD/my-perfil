import { RevealHeading } from "@/lib/motion/RevealHeading";
import { RevealGroup } from "@/lib/motion/RevealGroup";
import { ProcessLine } from "@/lib/motion/ProcessLine";
import { PROCESS_STEPS } from "@/lib/data/process";

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-36">
      <div className="container-page">
        <RevealHeading
          lines={["Como o projeto acontece"]}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-5xl"
        />

        <ProcessLine className="mt-16 max-w-2xl md:mt-20">
          <RevealGroup className="flex flex-col gap-12 pl-8 md:gap-16 md:pl-12">
            {PROCESS_STEPS.map((step) => (
              <div key={step.index} data-reveal-item>
                <span className="font-mono text-sm text-accent">{step.index}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </ProcessLine>
      </div>
    </section>
  );
}
