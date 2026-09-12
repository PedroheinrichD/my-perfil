"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "./gsap";
import { prefersReducedMotion } from "./prefersReducedMotion";

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const image = el.querySelector("img");

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1, clipPath: "none" });
      if (image) gsap.set(image, { scale: 1, autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { autoAlpha: 1 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });

      tl.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" });

      if (image) {
        tl.fromTo(image, { scale: 1.08, autoAlpha: 0.75 }, { scale: 1, autoAlpha: 1, duration: 1.2, ease: "power4.out" }, 0);
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} data-reveal className={className} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}
