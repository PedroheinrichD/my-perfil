"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "./gsap";
import { prefersReducedMotion } from "./prefersReducedMotion";

type Preset = "fade-up" | "blur-in" | "scale" | "slide-left" | "slide-right";

const PRESETS: Record<Preset, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  "fade-up": { from: { y: 32, autoAlpha: 0 }, to: { y: 0, autoAlpha: 1 } },
  "blur-in": {
    from: { y: 18, autoAlpha: 0, filter: "blur(10px)" },
    to: { y: 0, autoAlpha: 1, filter: "blur(0px)" },
  },
  scale: { from: { scale: 0.96, autoAlpha: 0 }, to: { scale: 1, autoAlpha: 1 } },
  "slide-left": { from: { x: 48, autoAlpha: 0 }, to: { x: 0, autoAlpha: 1 } },
  "slide-right": { from: { x: -48, autoAlpha: 0 }, to: { x: 0, autoAlpha: 1 } },
};

export function Reveal({
  children,
  preset = "fade-up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1, clearProps: "transform,filter" });
      return;
    }

    const config = PRESETS[preset];
    const ctx = gsap.context(() => {
      gsap.fromTo(el, config.from, {
        ...config.to,
        duration: 0.9,
        ease: "power4.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 84%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [preset, delay]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
