import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServicesToProjectsTransition } from "@/components/sections/ServicesToProjectsTransition";
import { Projects } from "@/components/sections/Projects";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Process } from "@/components/sections/Process";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServicesToProjectsTransition />
      <Projects />
      <WhyHireMe />
      <About />
      <Stack />
      <Process />
      <CtaFinal />
    </>
  );
}
