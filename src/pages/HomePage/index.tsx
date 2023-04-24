import About from "src/components/About";
import ProjectsSkillsResume from "src/components/ProjectsSkillsResume";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <About />
      <ProjectsSkillsResume />
    </div>
  );
}

export default HomePage;
