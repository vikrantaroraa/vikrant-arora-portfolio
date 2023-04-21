import Header from "src/components/Header";
import "./App.css";
import About from "src/components/About";

import ProjectsSkillsResume from "src/components/ProjectsSkillsResume";
import Footer from "src/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsSkillsResume />
      <Footer />
    </div>
  );
}

export default App;
