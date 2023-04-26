import { useEffect } from "react";
import Projects from "src/components/Projects";
import Layout from "src/pages/Layout";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout>
      <Projects />
    </Layout>
  );
}

export default ProjectsPage;
