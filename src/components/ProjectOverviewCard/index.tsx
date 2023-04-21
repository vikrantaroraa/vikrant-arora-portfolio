import styles from "src/components/ProjectOverviewCard/index.module.css";

function ProjectOverviewCard() {
  return (
    <div className={styles["card"]}>
      <div className={styles["tag"]}>React.js</div>
      <div className={styles["info-container"]}>
        <div className={styles["project-name"]}>Give me some food</div>
        <div className={styles["project-description"]}>
          This is a React JS application which gives you information about the
          food items when a food emoji is given as input.
        </div>
      </div>
    </div>
  );
}

export default ProjectOverviewCard;
