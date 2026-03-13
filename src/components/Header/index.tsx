import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { translations } from "../../data/translations";
import type { Lang } from "../../data/translations";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  lang: Lang;
  onToggleLang: () => void;
}

const navIds = ["about", "process", "work", "contact"];

export default function Header({
  theme,
  onToggleTheme,
  lang,
  onToggleLang,
}: HeaderProps) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
      let curr = "";
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          curr = id;
        }
      }
      setActive(curr);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SILVA<span className={styles.dot}>.</span>
          </a>
        </h1>
        <nav className={styles.nav}>
          {navIds.map((id, i) => (
            <button
              key={id}
              className={`${styles.navLink} ${active === id ? styles.active : ""}`}
              onClick={() => goTo(id)}
            >
              {t.nav[i]}
            </button>
          ))}
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? "🌛" : "🌞"}
          </button>
          <button
            className={styles.langToggle}
            onClick={onToggleLang}
            aria-label={
              lang === "en" ? "Mudar para português" : "Switch to English"
            }
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <button className={styles.hireBtn} onClick={() => goTo("contact")}>
            {t.hireMe}
          </button>
        </nav>
      </div>
    </header>
  );
}
