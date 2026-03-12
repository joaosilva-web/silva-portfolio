import "./App.css";
import AboutService from "./components/AboutService";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/";
import MyWork from "./components/MyWork";
import Process from "./components/Process";

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Hero />
      <AboutService />
      <Process />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
