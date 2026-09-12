export type StackItem = {
  name: string;
  /** Simple Icons slug (brand) or Phosphor icon name (concept). */
  icon: string;
  kind: "brand" | "concept";
};

export type StackGroup = {
  label: string;
  items: StackItem[];
};

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react", kind: "brand" },
      { name: "Next.js", icon: "nextdotjs", kind: "brand" },
      { name: "TypeScript", icon: "typescript", kind: "brand" },
      { name: "JavaScript", icon: "javascript", kind: "brand" },
      { name: "HTML", icon: "html5", kind: "brand" },
      { name: "CSS", icon: "css3", kind: "brand" },
      { name: "Tailwind CSS", icon: "tailwindcss", kind: "brand" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs", kind: "brand" },
      { name: "APIs REST", icon: "ArrowsLeftRight", kind: "concept" },
      { name: "Autenticação", icon: "ShieldCheck", kind: "concept" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", icon: "mysql", kind: "brand" },
      { name: "SQL", icon: "Database", kind: "concept" },
    ],
  },
  {
    label: "Ferramentas",
    items: [
      { name: "Git", icon: "git", kind: "brand" },
      { name: "GitHub", icon: "github", kind: "brand" },
      { name: "Vercel", icon: "vercel", kind: "brand" },
    ],
  },
];
