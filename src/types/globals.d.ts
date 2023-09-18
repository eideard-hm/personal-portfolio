export {};

declare global {
  type Project = {
    title: string;
    weight: number;
    longContent: string;
    shortContent: string;
    images: string[];
    tech: Tech[];
    slug: string;
    headings: { depth: number; slug: string; text: string }[];
    link: string;
    repoLink: string;
  };

  type Tech = (typeof TechNames)[number];
}

const TechNames = [
  ".NET",
  "Angular",
  "Astro",
  "C#",
  "Git",
  "Go",
  "Javascript",
  "MongoDB",
  "Next.js",
  "Node.js",
  "React",
  "SqlServer",
  "Typescript",
] as const;
