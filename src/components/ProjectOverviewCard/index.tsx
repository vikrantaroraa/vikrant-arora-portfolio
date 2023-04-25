import styles from "src/components/ProjectOverviewCard/index.module.css";

export interface ProjectOverviewCardProps {
  tags: Array<string>;
  name: string;
  description: string;
}

function ProjectOverviewCard({
  tags,
  name,
  description,
}: ProjectOverviewCardProps) {
  return (
    <div className={styles["card"]}>
      <div className={styles["tags"]}>{tags[0]}</div>
      <div className={styles["info-container"]}>
        <div className={styles["project-name"]}>{name}</div>
        <div className={styles["project-description"]}>{description}</div>
      </div>
    </div>
  );
}

export default ProjectOverviewCard;
