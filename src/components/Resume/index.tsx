import styles from "src/components/Resume/index.module.css";

function Resume() {
  return (
    <div className={styles["resume"]}>
      <div className={styles["heading"]}>Resume</div>
      <div className={styles["resume-container"]}>
        <span className={styles["more-details"]}>
          More details about my career
        </span>
        <button className={styles["open-button"]}>Open</button>
      </div>
    </div>
  );
}

export default Resume;
