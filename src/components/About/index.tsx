import styles from "src/components/About/index.module.css";
import hero from "src/assets/vikrant-profile-image-2.png";
import { useDarkTheme } from "src/context/theme-context";

function About() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`${styles["about"]} ${darkMode ? styles["dark"] : ""}`}>
      <div className={styles["avatar-container"]}>
        <div className={styles["avatar"]}>
          <img src={hero} alt="avatar" />
        </div>
      </div>
      <div className={styles["info-container"]}>
        <div id="about" className={styles["heading"]}>
          About Me
        </div>
        <div className={styles["info"]}>
          I am a Frontend-heavy full stack developer with 2 years of experience
          in the JavaScript ecosystem, where i have worked heavily on the
          frontend and also did some backend in Node.js as well. A passionate
          developer who loves to build amazing products with a knack to make
          things better. I am interested in joining as a frontend developer and
          looking forward to building great tech products. And yeah, I am
          extremely good at writing documentation.
        </div>
      </div>
    </div>
  );
}

export default About;
