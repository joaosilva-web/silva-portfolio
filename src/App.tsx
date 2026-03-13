import "./App.css";
import AboutService from "./components/AboutService";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/";
import MyWork from "./components/MyWork";
import Process from "./components/Process";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLanguage();
  return (
    <>
      <Cursor />
      <Header
        theme={theme}
        onToggleTheme={toggle}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <Hero lang={lang} />
      <AboutService lang={lang} />
      <Process lang={lang} />
      <MyWork lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
