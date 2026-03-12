import tolivreImg from "../assets/mockup.png";

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  stack: string[];
  mockup: string | null;
}

export const projects: Project[] = [
  {
    title: "TôLivre",
    description:
      "TôLivre is a SaaS that helps appointment-based professionals reduce no-shows and manage schedules.",
    link: "https://tolivre.app",
    github: "https://github.com/",
    stack: [
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "Docker",
      "Stripe",
    ],
    mockup: tolivreImg,
  },
  {
    title: "FlashLearn",
    description:
      "FlashLearn is a smart flashcard platform that helps students learn more efficiently using spaced repetition.",
    link: "https://flashlearn.app",
    github: "https://github.com/",
    stack: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    mockup: tolivreImg,
  },
  {
    title: "Project Three",
    description:
      "A short description of the third project goes here, showcasing the work and technology involved.",
    link: "#",
    github: "https://github.com/",
    stack: ["Next.js", "Tailwind CSS"],
    mockup: tolivreImg,
  },
];
