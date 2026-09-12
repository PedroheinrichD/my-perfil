import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siTailwindcss,
  siNodedotjs,
  siMysql,
  siGit,
  siGithub,
  siVercel,
} from "simple-icons";

export const BRAND_ICONS = {
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  html5: siHtml5,
  css3: siCss,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  mysql: siMysql,
  git: siGit,
  github: siGithub,
  vercel: siVercel,
} as const;

export type BrandIconSlug = keyof typeof BRAND_ICONS;
