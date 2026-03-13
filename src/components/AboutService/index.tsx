import { motion } from "framer-motion";
import Card from "../Card";
import styles from "./AboutService.module.css";
import { services } from "../../data/services";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

export default function AboutService({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <motion.section
      className={styles.aboutService}
      id="about"
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.08 }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div variants={fadeUp}>
            <h2>
              <span>{t.about.titleAccent}</span>
            </h2>
            <h2 className={styles.playfair}>{t.about.titleMain}</h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className={styles.playfair}>{t.about.description}</p>
            <button className={styles.ctaBtn}>
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {t.about.bookCall}
            </button>
          </motion.div>
        </div>
        <div className={styles.cardsWrapper}>
          {services.map((s, i) => (
            <Card
              key={s.icon}
              icon={<span>{s.icon}</span>}
              iconLabel={t.about.services[i]}
              text={t.about.services[i]}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
