"use client";

import { useRef, useEffect, Fragment } from "react";
import { gsap } from "./gsap";
import { prefersReducedMotion } from "./prefersReducedMotion";

export function RevealHeading({
  lines,
  as = "h2",
  className,
  trigger = "scroll",
  delay = 0,
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  trigger?: "scroll" | "load";
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1 });
      gsap.set(el.querySelectorAll(".motion-line"), { y: "0%", autoAlpha: 1, filter: "blur(0px)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { autoAlpha: 1 });
      const lineEls = el.querySelectorAll<HTMLElement>(".motion-line");
      if (!lineEls.length) return;

      const vars: gsap.TweenVars = {
        y: "0%",
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        stagger: 0.11,
        delay,
      };

      if (trigger === "load") {
        gsap.fromTo(lineEls, { y: "100%", autoAlpha: 0, filter: "blur(8px)" }, vars);
      } else {
        gsap.fromTo(
          lineEls,
          { y: "100%", autoAlpha: 0, filter: "blur(8px)" },
          {
            ...vars,
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [trigger, delay]);

  const content = lines.map((line, i) => (
    <Fragment key={i}>
      <span className="motion-line-mask" aria-hidden="true">
        <span className="motion-line">{line}</span>
      </span>
    </Fragment>
  ));

  const accessibleLabel = lines.join(" ");

  if (as === "h1") {
    return (
      <h1 ref={ref} className={className} data-motion-text="true" aria-label={accessibleLabel}>
        {content}
      </h1>
    );
  }

  if (as === "h3") {
    return (
      <h3 ref={ref} className={className} data-motion-text="true" aria-label={accessibleLabel}>
        {content}
      </h3>
    );
  }

  return (
    <h2 ref={ref} className={className} data-motion-text="true" aria-label={accessibleLabel}>
      {content}
    </h2>
  );
}
