import Header from "src/components/Header";
import "./App.css";
import About from "src/components/About";

import ProjectsSkillsResume from "src/components/ProjectsSkillsResume";
import Footer from "src/components/Footer";
import Projects from "src/components/Projects";
import { useState } from "react";
import HomePage from "src/pages/HomePage";

function App() {
  const [route, setRoute] = useState("/projects");
  return (
    <div className="App">
      <Header />
      {route === "/" && <HomePage />}
      {route === "/projects" && <Projects />}
      <Footer />
    </div>
  );
}

export default App;
