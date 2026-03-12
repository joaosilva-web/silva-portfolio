import { motion } from "framer-motion";
import { Search, Brush, Code2, Rocket } from "lucide-react";
import styles from "./Process.module.css";
import { fadeUp, staggerContainer, easing } from "../../lib/motionVariants";

const steps = [
  {
    number: "01",
    icon: <Search size={20} strokeWidth={2.5} />,
    title: "Discovery",
    description:
      "We align on goals, audience, and scope. I ask the right questions so nothing gets built in the dark.",
  },
  {
    number: "02",
    icon: <Brush size={20} strokeWidth={2.5} />,
    title: "Design",
    description:
      "From wireframes to high-fidelity prototypes — every pixel is intentional, every flow is tested.",
  },
  {
    number: "03",
    icon: <Code2 size={20} strokeWidth={2.5} />,
    title: "Development",
    description:
      "Clean, performant code. I build with the stack that best fits the project, always with quality first.",
  },
  {
    number: "04",
    icon: <Rocket size={20} strokeWidth={2.5} />,
    title: "Launch",
    description:
      "Deploy, handoff, and support. I make sure you go live with confidence and everything working.",
  },
];

export default function Process() {
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
            HOW I <span className={styles.highlight}>WORK 🤯</span>
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            A clear, collaborative process from the first conversation to the
            final delivery.
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
