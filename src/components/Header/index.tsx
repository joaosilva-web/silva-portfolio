import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
      let curr = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          curr = link.id;
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
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.navLink} ${active === link.id ? styles.active : ""}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className={styles.hireBtn} onClick={() => goTo("contact")}>
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
}
