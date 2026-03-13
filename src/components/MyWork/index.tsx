import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MyWork.module.css";
import arrowLeft from "../../assets/arrow-left.svg";
import { projects } from "../../data/projects";
import { fadeUp, staggerContainer, easing } from "../../lib/motionVariants";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

const textSlideVariants = {
  enter: (dir: "left" | "right") => ({
    x: dir === "right" ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easing },
  },
  exit: (dir: "left" | "right") => ({
    x: dir === "right" ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  }),
};

const mockupSlideVariants = {
  enter: (dir: "left" | "right") => ({
    y: dir === "right" ? 60 : -60,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easing },
  },
  exit: (dir: "left" | "right") => ({
    y: dir === "right" ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  }),
};

export default function MyWork({ lang }: { lang: Lang }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const t = translations[lang];

  function prev() {
    setDirection("left");
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  }

  function next() {
    setDirection("right");
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  }

  function goTo(i: number) {
    setDirection(i > current ? "right" : "left");
    setCurrent(i);
  }

  const project = projects[current];

  return (
    <motion.section
      className={styles.myWork}
      id="work"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.1 }}
    >
      <motion.div className={styles.header} variants={fadeUp}>
        <h2>
          <span className={styles.see}>{t.work.seeWord}</span>{" "}
          {t.work.titleRest}
        </h2>
      </motion.div>

      <div className={styles.content}>
        <button
          className={styles.arrowLeft}
          onClick={prev}
          aria-label="Previous"
        >
          <img src={arrowLeft} alt="" />
        </button>

        {/* Mockup carousel */}
        <motion.div className={styles.mockupCarousel} variants={fadeUp}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`mockup-${current}`}
              custom={direction}
              variants={mockupSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.mockupSlide}
            >
              {project.mockup ? (
                <img src={project.mockup} alt={project.title} />
              ) : (
                <div className={styles.mockupPlaceholder} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Text carousel */}
        <motion.div className={styles.textCarousel} variants={fadeUp}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${current}`}
              custom={direction}
              variants={textSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.textSlide}
            >
              <a
                className={styles.projectTitle}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <p className={styles.projectDesc}>
                {t.projects[current]?.description ?? project.description}
              </p>
              <ul className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectActions}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {t.work.viewProject}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div className={styles.dots}>
                {projects.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <button className={styles.arrowRight} onClick={next} aria-label="Next">
          <img src={arrowLeft} alt="" className={styles.arrowFlipped} />
        </button>
      </div>
    </motion.section>
  );
}
