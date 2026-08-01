import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import { useState } from "react";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const sections = [
    "main",
    "about",
    "skills",
    "projects",
    "contact",
    "certificate",
  ];
  const [section, setSection] = useState("main");
  function handleNext() {
    const currentIndex = sections.indexOf(section);
    const nextIndex = (currentIndex + 1) % sections.length;

    setSection(sections[nextIndex]);
  }

  return (
    <div>
      <Navbar setSection={setSection} />
      {section === "main" && <Main handleNext={handleNext} />}
      {section === "about" && <About handleNext={handleNext} />}
      {section === "skills" && (
        <Skills handleNext={handleNext} setSection={setSection} />
      )}
      {/* {section === "projects" && <Projects handleNext={handleNext} />} */}
      {section === "contact" && <Contact handleNext={handleNext} />}
      {section === "certificate" && (
        <Certificate handleNext={handleNext} setSection={setSection} />
      )}
    </div>
  );
}

export default App;
