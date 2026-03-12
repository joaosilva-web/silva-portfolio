import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { fadeUp } from "../../lib/motionVariants";
import type { JSX } from "react";

interface CardProps {
  icon: JSX.Element;
  iconLabel: string;
  text: string;
}

export default function Card({ icon, iconLabel, text }: CardProps) {
  return (
    <motion.div className={styles.card} variants={fadeUp}>
      <p role="img" aria-label={iconLabel} className={styles.icon}>
        {icon}
      </p>
      <p>{text}</p>
    </motion.div>
  );
}
