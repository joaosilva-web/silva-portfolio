import { useEffect, useState } from "react";
import type { Lang } from "../data/translations";

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const initial =
      saved === "pt" || saved === "en"
        ? saved
        : navigator.language.startsWith("pt")
          ? "pt"
          : "en";
    document.documentElement.setAttribute("data-lang", initial);
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  function toggle() {
    setLang((l) => (l === "pt" ? "en" : "pt"));
  }

  return { lang, toggle };
}
