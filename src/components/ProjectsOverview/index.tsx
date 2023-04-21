import ProjectOverviewCard from "src/components/ProjectOverviewCard";
import styles from "src/components/ProjectsOverview/index.module.css";

function ProjectsOverview() {
  return (
    <div className={styles["projects-overview"]}>
      <div className={styles["heading"]}>My Projects</div>
      <div className={styles["project-cards"]}>
        <ProjectOverviewCard />
      </div>
    </div>
  );
}

export default ProjectsOverview;
