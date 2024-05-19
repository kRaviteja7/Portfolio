import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPos = window.scrollY;
      const newActiveSection = sections.find((section) => {
        const sectionEl = document.getElementById(section);
        return (
          sectionEl.offsetTop <= scrollPos &&
          sectionEl.offsetTop + sectionEl.offsetHeight > scrollPos
        );
      });

      setActiveSection(newActiveSection || "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <>
      <Home sections={sections} activeSection={activeSection} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
