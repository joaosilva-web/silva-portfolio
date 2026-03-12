import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import joaoPretoBranco from "../../assets/joao-preto-branco.png";
import joaoBlack from "../../assets/joao-black.png";
import { easing } from "../../lib/motionVariants";

const vp = { amount: 0 as const };

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -40]);
  const slimeY = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section className={styles.hero}>
      <motion.div className={styles.slime} style={{ y: slimeY }} />

      <img
        className={styles.fotoBack}
        src={joaoBlack}
        alt=""
        aria-hidden="true"
      />

      <div className={styles.fotoWrapper}>
        <motion.img
          className={styles.foto}
          src={joaoPretoBranco}
          alt="João Silva — fullstack developer"
          style={{ y: parallaxY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ delay: 0.2, duration: 1, ease: easing }}
        />
      </div>

      <motion.h2
        className={styles.developer}
        transformTemplate={(_, gen) => `translateX(-50%) ${gen}`}
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ delay: 0.1, duration: 1, ease: easing }}
      >
        DEVELOPER
      </motion.h2>

      <motion.div
        className={styles.text}
        transformTemplate={(_, gen) => `translate(-50%, -50%) ${gen}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ delay: 0.4, duration: 0.8, ease: easing }}
      >
        <h3 className={styles.right}>
          I<span>'</span>m
        </h3>
        <h3 className={styles.left}>FullStack</h3>
      </motion.div>

      <motion.button
        className={styles.cta}
        transformTemplate={(_, gen) => `translateX(-50%) ${gen}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, ease: easing }}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.25, ease: "easeInOut" },
        }}
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Hire Me
      </motion.button>

      <div className={styles.bottomTexts}>
        <div className={styles.bottomTextsInner}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.7, duration: 0.7, ease: easing }}
          >
            specialized in web applications, UI/UX and problem solving
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 1.1, duration: 0.7, ease: easing }}
          >
            build web applications that solve real business problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
