import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

export default function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <motion.section
      className={styles.contact}
      id="contact"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.08 }}
    >
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <motion.h2 variants={fadeUp}>
            {t.contact.title}{" "}
            <span className={styles.highlight}>{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className={styles.links}>
          <motion.a
            href="mailto:joaogustavosilva2024@gmail.com"
            className={styles.linkItem}
            aria-label="Send email"
            variants={fadeUp}
          >
            <span className={styles.linkLabel}>Email</span>
            <span className={styles.linkValue}>
              joaogustavosilva2024@gmail.com
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/joaosilva-web"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
            aria-label="GitHub profile"
            variants={fadeUp}
          >
            <span className={styles.linkLabel}>GitHub</span>
            <span className={styles.linkValue}>github.com/joaosilva-web</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/joaosilvadeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
            aria-label="LinkedIn profile"
            variants={fadeUp}
          >
            <span className={styles.linkLabel}>LinkedIn</span>
            <span className={styles.linkValue}>
              linkedin.com/in/joaosilvadeveloper
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
