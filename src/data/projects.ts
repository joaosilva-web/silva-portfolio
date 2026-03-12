// import img from "../assets/mockup.png";
import tolivreImg from "../assets/mockup-tolivre.png";
import flashLearnImg from "../assets/mockup-flashlearn.png";

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
    link: "https://flashcards-peach-five.vercel.app/",
    github: "https://github.com/",
    stack: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    mockup: flashLearnImg,
  },
];
