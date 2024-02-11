import styles from "src/components/Resume/index.module.css";
import { useDarkTheme } from "src/context/theme-context";

function Resume() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`${styles["resume"]} ${darkMode ? styles["dark"] : ""}`}>
      <div className={styles["heading"]}>Resume</div>
      <div className={styles["resume-container"]}>
        <span className={styles["more-details"]}>
          More details about my career
        </span>
        <a
          href="https://drive.google.com/file/d/1IJPjWSN1kQ9ZBstcdqwsEGJNPMClG1Tm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles["open-button"]}>Open</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
