"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "./gsap";
import { prefersReducedMotion } from "./prefersReducedMotion";

export function RevealGroup({
  children,
  className,
  itemSelector = "[data-reveal-item]",
  stagger = 0.075,
}: {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll(itemSelector), { autoAlpha: 1, clearProps: "transform,filter" });
      return;
    }

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(itemSelector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { y: 36, autoAlpha: 0, filter: "blur(8px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [itemSelector, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
