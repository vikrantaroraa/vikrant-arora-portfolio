import styles from "src/components/Resume/index.module.css";

function Resume() {
  return (
    <div className={styles["resume"]}>
      <div className={styles["heading"]}>Resume</div>
      <div className={styles["resume-container"]}>
        <span className={styles["more-details"]}>
          More details about my career
        </span>
        <button className={styles["open-button"]}>
          <a
            href="https://www.linkedin.com/in/vikrantaroraa/overlay/1635514661658/single-media-viewer/?profileId=ACoAACt8gEIBCJkQ5pj8190twkKbzDEgPsT_HBE"
            target="_blank"
            rel="noreferrer"
          >
            Open
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
