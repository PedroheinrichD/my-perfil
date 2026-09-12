"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "./gsap";

export function ProcessLine({ children, className }: { children: ReactNode; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const track = trackRef.current;
    if (!fill || !track) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={trackRef} className={`relative ${className ?? ""}`}>
      <div className="absolute left-0 top-0 h-full w-px bg-line-strong" aria-hidden="true">
        <div ref={fillRef} className="h-full w-px origin-top bg-accent" style={{ transform: "scaleY(0)" }} />
      </div>
      {children}
    </div>
  );
}
