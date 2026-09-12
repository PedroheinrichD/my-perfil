"use client";

import { useRef, useEffect } from "react";
import { gsap } from "./gsap";

/** Minimal scroll affordance: a line with a dot drifting along it. No label, no "Scroll" copy. */
export function ScrollCue({ className }: { className?: string }) {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(dot, {
      y: 28,
      opacity: 0,
      duration: 1.4,
      ease: "power2.in",
      repeat: -1,
      delay: 0.6,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className={`relative h-10 w-px overflow-hidden bg-line-strong ${className ?? ""}`} aria-hidden="true">
      <span ref={dotRef} className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
    </div>
  );
}
