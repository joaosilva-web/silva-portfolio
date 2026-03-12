import { motion } from "framer-motion";
import Card from "../Card";
import styles from "./AboutService.module.css";
import { services } from "../../data/services";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

export default function AboutService() {
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
              <span>ALL</span> YOUR🤩
            </h2>
            <h2 className={styles.playfair}>project needs</h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className={styles.playfair}>
              Everything your project needs in one place with the assurance of
              highest excellence and usability
            </p>
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
              Book a Call
            </button>
          </motion.div>
        </div>
        <div className={styles.cardsWrapper}>
          {services.map((s) => (
            <Card
              key={s.text}
              icon={<span>{s.icon}</span>}
              iconLabel={s.label}
              text={s.text}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
