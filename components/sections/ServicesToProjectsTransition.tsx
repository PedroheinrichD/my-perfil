import { RevealHeading } from "@/lib/motion/RevealHeading";

export function ServicesToProjectsTransition() {
  return (
    <section className="border-y border-line bg-ink-raised py-28 md:py-40">
      <div className="container-page">
        <RevealHeading
          lines={["Da lista de serviços", "para o que já está no ar."]}
          className="text-center font-display text-3xl font-semibold leading-tight tracking-tight text-paper text-balance md:text-6xl"
        />
      </div>
    </section>
  );
}
