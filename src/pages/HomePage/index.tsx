import About from "src/components/About";
import ProjectsSkillsResume from "src/components/ProjectsSkillsResume";
import Layout from "src/pages/Layout";

function HomePage() {
  return (
    <Layout>
      <About />
      <ProjectsSkillsResume />
    </Layout>
  );
}

export default HomePage;
