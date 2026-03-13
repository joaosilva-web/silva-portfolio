import { motion } from "framer-motion";
import { Search, Brush, Code2, Rocket } from "lucide-react";
import styles from "./Process.module.css";
import { fadeUp, staggerContainer, easing } from "../../lib/motionVariants";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

const stepIcons = [
  <Search size={20} strokeWidth={2.5} />,
  <Brush size={20} strokeWidth={2.5} />,
  <Code2 size={20} strokeWidth={2.5} />,
  <Rocket size={20} strokeWidth={2.5} />,
];
const stepNumbers = ["01", "02", "03", "04"];

export default function Process({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const steps = t.process.steps.map((s, i) => ({
    number: stepNumbers[i],
    icon: stepIcons[i],
    title: s.title,
    description: s.description,
  }));
  return (
    <motion.section
      className={styles.process}
      id="process"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.08 }}
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <motion.h2 variants={fadeUp}>
            {t.process.title}{" "}
            <span className={styles.highlight}>{t.process.titleHighlight}</span>
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            {t.process.subtitle}
          </motion.p>
        </div>

        <div className={styles.steps}>
          <motion.div
            className={styles.connectorLine}
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ amount: 0.08 }}
            transition={{ duration: 1.4, ease: easing, delay: 1.1 }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.step}
              data-number={step.number}
              variants={fadeUp}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepLine} />
              <h3 className={styles.stepTitle}>
                <span className={styles.stepIcon} aria-hidden="true">
                  {step.icon}
                </span>
                {step.title}
              </h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
