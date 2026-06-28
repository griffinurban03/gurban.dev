export type Project = {
  name: string;
  description: string;
  href: string;
  tags: string[];
  /** Featured projects also appear on the homepage. */
  featured?: boolean;
};

/* Placeholder projects — replace with your real work. */
export const projects: Project[] = [
  {
    name: "Placeholder Project One",
    description:
      "Placeholder description. Briefly explain what the project does and why it's interesting.",
    href: "https://github.com/placeholder/project-one",
    tags: ["TypeScript", "Next.js"],
    featured: true,
  },
  {
    name: "Placeholder Project Two",
    description:
      "Placeholder description. Mention the problem it solves and the stack you used.",
    href: "https://github.com/placeholder/project-two",
    tags: ["React", "Node.js"],
    featured: true,
  },
  {
    name: "Placeholder Project Three",
    description:
      "Placeholder description. A smaller experiment, library, or side project.",
    href: "https://github.com/placeholder/project-three",
    tags: ["Open Source"],
  },
];
