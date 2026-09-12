"use client";

import { Children, useRef, useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "./gsap";

/**
 * Pins each child (except the last) at the top of the viewport while the next
 * one scrolls over it, shrinking and dimming the previous card. Desktop/tablet
 * only: on narrow viewports, content-heavy case-study cards risk overflowing
 * a pinned viewport, so mobile gets a plain stacked flow instead.
 */
export function StickyStack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isDesktop: "(min-width: 900px)",
      },
      (context) => {
        const { reduceMotion, isDesktop } = context.conditions as {
          reduceMotion: boolean;
          isDesktop: boolean;
        };
        if (reduceMotion || !isDesktop) return;

        const cards = gsap.utils.toArray<HTMLElement>(".stack-card", root);

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;

          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: cards[cards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          });

          gsap.to(card, {
            scale: 0.94,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        });
      }
    );

    return () => mm.revert();
  }, [items.length]);

  return (
    <div ref={ref} className="relative">
      {items.map((child, i) => (
        <div
          key={i}
          className="stack-card relative flex items-center py-16 md:min-h-screen md:py-0"
          style={{ zIndex: i + 1 }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
