import styles from "src/components/About/index.module.css";
import hero from "src/assets/avatar.png";
import hero2 from "src/assets/vikrant-profile-image-2.png";
import { useDarkTheme } from "src/context/theme-context";

function About() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`${styles["about"]} ${darkMode ? styles["dark"] : ""}`}>
      <div className={styles["avatar-container"]}>
        <div className={styles["avatar"]}>
          <img src={hero2} alt="avatar" />
        </div>
      </div>
      <div className={styles["info-container"]}>
        <div id="about" className={styles["heading"]}>
          About Me
        </div>
        <div className={styles["info"]}>
          I am a Frontend-heavy full stack developer with 2 years of experience
          in the JavaScript ecosystem, where i have worked heavily on frontend
          and also did some backend as well. I also happen to have 2 years of
          experience working on personal projects where i have made full stack
          applications in React, Flask, and PostgreSQL.
        </div>
      </div>
    </div>
  );
}

export default About;
