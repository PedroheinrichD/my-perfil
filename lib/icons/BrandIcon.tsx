import { BRAND_ICONS, type BrandIconSlug } from "./brand-icons";

export function BrandIcon({
  slug,
  className,
  size = 20,
}: {
  slug: BrandIconSlug;
  className?: string;
  size?: number;
}) {
  const icon = BRAND_ICONS[slug];

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
