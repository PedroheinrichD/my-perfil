"use client";

import { Children, useRef, useEffect, type ReactNode } from "react";
import { gsap } from "./gsap";

/**
 * Each card sticks to the top of the viewport (native CSS `position: sticky`,
 * not GSAP pin) for the extra scroll height of its wrapper, then releases
 * as the next card's wrapper takes over and slides up to cover it. The
 * stacking/occlusion is handled entirely by the browser's own layout engine;
 * GSAP only drives the cosmetic dim+scale on the outgoing card, scoped to
 * that same wrapper's own scroll range. Desktop/tablet only: on narrow
 * viewports, content-heavy case-study cards risk overflowing a stuck
 * viewport, so mobile gets a plain stacked flow instead (sticky positioning
 * itself is gated off below `md:` in the markup, independent of JS).
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

        const wrappers = gsap.utils.toArray<HTMLElement>(".stack-wrapper", root);

        wrappers.forEach((wrapper, i) => {
          if (i === wrappers.length - 1) return;
          const card = wrapper.querySelector<HTMLElement>(".stack-card");
          if (!card) return;

          gsap.to(card, {
            scale: 0.94,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "bottom top",
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
        <div key={i} className="stack-wrapper relative md:h-[180vh]">
          <div
            className="stack-card relative flex items-center bg-ink py-16 md:sticky md:top-0 md:h-screen md:py-0"
            style={{ zIndex: i + 1 }}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
