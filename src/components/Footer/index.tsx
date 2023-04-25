import styles from "src/components/Footer/index.module.css";
import github from "src/assets/github.svg";
import linkedIn from "src/assets/linkedIn.svg";
import twitter from "src/assets/twitter.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["copyright"]}>
        <span>©2023 Vikrant Arora</span>
      </div>
      <div className={styles["nav-menu"]}>
        <Link to="/" className={styles["menu-item"]}>
          Home
        </Link>
        <Link to="/" className={styles["menu-item"]}>
          About
        </Link>
        <Link to="/projects" className={styles["menu-item"]}>
          Projects
        </Link>
        <Link to="/" className={styles["menu-item"]}>
          Resume
        </Link>
      </div>
      <div className={styles["social-links"]}>
        <div className={styles["link"]}>
          <a
            href="https://twitter.com/vikrantaroraa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter profile" />
          </a>
        </div>
        <div className={styles["link"]}>
          <a
            href="https://github.com/vikrantaroraa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github profile" />
          </a>
        </div>
        <div className={styles["link"]}>
          <a
            href="https://www.linkedin.com/in/vikrantaroraa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn profile" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
