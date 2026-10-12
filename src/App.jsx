import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { accents } from "./data/content";

export default function App() {
  const [accent, setAccent] = useState(accents[0].value);

  // The chosen accent colour is applied site-wide through a CSS variable.
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  return (
    <>
      <Navbar />
      <main>
        <Hero accent={accent} onAccentChange={setAccent} />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
