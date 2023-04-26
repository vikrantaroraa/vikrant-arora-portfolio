// @ts-nocheck
import { useEffect, useRef } from "react";
import About from "src/components/About";
import ProjectsSkillsResume from "src/components/ProjectsSkillsResume";
import { useNavigationMenu } from "src/context/navigation-menu-context";
import Layout from "src/pages/Layout";

function HomePage() {
  const { activeLink } = useNavigationMenu();
  const resumeRef = useRef();

  useEffect(() => {
    if (activeLink === "resume") {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Layout>
      <About />
      <ProjectsSkillsResume ref={resumeRef} />
    </Layout>
  );
}

export default HomePage;
