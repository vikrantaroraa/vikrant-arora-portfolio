import styles from "src/components/About/index.module.css";
import linkedIn from "src/assets/linkedIn.svg";

function About() {
  return (
    <div className={styles["about"]}>
      <div className={styles["avatar-container"]}>
        <div className={styles["avatar"]}>
          <img src={linkedIn} alt="avatar" />
        </div>
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["heading"]}>About Me</div>
        <div className={styles["info"]}>
          I'm a Full-Stack Developer with a focus on Frontend. I have 2 years of
          expertise in JavaScript and specialize in creating engaging user
          interfaces. I have also worked in backend and developed full-stack
          applications with React and Flask for 4 years.
        </div>
      </div>
    </div>
  );
}

export default About;
