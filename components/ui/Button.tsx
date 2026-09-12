import type { AnchorHTMLAttributes, ReactNode } from "react";
import { MagneticLink } from "@/lib/motion/MagneticLink";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-sharp font-display font-medium tracking-tight transition-colors duration-300 whitespace-nowrap";

const VARIANTS = {
  primary: "bg-accent text-accent-ink hover:bg-accent-soft",
  secondary: "border border-line-strong text-paper hover:border-accent hover:text-accent",
};

const SIZES = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-6 py-3.5 text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...anchorProps
}: Props) {
  return (
    <MagneticLink
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...anchorProps}
    >
      {children}
    </MagneticLink>
  );
}
