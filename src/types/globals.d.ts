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
  '.NET',
  'Angular',
  'Astro',
  'Bootstrap',
  'C#',
  'Composer',
  'Git',
  'GitHub',
  'Go',
  'GraphQL',
  'Ionic',
  'JavaScript',
  'MongoDB',
  'MySQL',
  'Netlify',
  'Next.js',
  'Node.js',
  'PHP',
  'Qwik',
  'React',
  'Sql Server',
  'Typescript',
  'Vite',
] as const;
