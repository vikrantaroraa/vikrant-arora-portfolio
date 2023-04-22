import styles from "src/components/ProjectCard/index.module.css";
import TechStackTile from "src/components/TechStackTile";
import linkedIn from "src/assets/linkedIn.svg";
import rightArrowWhite from "src/assets/rightArrowWhite.svg";

interface ProjectCardProps {
  tags: Array<string>;
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

function ProjectCard({
  tags,
  name,
  imageUrl,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["tiles-container"]}>
        {tags.map((name) => (
          <TechStackTile name={name} />
        ))}
      </div>
      <div className={styles["project-info"]}>
        <span className={styles["name"]}>{name}</span>
        <div className={styles["image"]}>
          <img src={imageUrl} alt="project name" />
        </div>
        <p className={styles["description"]}>{description}</p>
        <button className={styles["view-button"]}>
          View Project
          <span className={styles["right-arrow"]}>
            <img src={rightArrowWhite} alt="right arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
