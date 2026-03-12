import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.verse} aria-hidden="true">
        In the beginning was the Word — Jn 1:1
      </p>
      <div className={styles.container}>
        <p className={styles.innerText}>Developed with 💚 by</p>
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
