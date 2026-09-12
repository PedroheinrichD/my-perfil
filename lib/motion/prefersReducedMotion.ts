/** Call only from inside effects/handlers (client-only, reads window). */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
