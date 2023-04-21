import ProjectsOverview from "src/components/ProjectsOverview";
import styles from "src/components/ProjectsSkillsResume/index.module.css";
import Resume from "src/components/Resume";
import Skills from "src/components/Skills";

function ProjectsSkillsResume() {
  return (
    <div className={styles["container"]}>
      <div className={styles["projects"]}>
        <ProjectsOverview />
      </div>
      <div className={styles["skills-and-resume"]}>
        <div className={styles["skills"]}>
          <Skills />
        </div>
        <div className={styles["resume"]}>
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSkillsResume;
