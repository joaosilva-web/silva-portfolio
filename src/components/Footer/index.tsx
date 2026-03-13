import styles from "./Footer.module.css";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <footer className={styles.footer}>
      <p className={styles.verse} aria-hidden="true">
        {t.footer.verse}
      </p>
      <div className={styles.container}>
        <p className={styles.innerText}>{t.footer.madeBy}</p>
        <a
          className={styles.logoText}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          SILVA<span>.</span>
        </a>
      </div>
    </footer>
  );
}
