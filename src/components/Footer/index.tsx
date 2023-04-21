import styles from "src/components/Footer/index.module.css";
import github from "src/assets/github.svg";
import linkedIn from "src/assets/linkedIn.svg";
import twitter from "src/assets/twitter.svg";
function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["copyright"]}>
        <span>©2023 Vikrant Arora</span>
      </div>
      <div className={styles["nav-menu"]}>
        <div className={styles["menu-item"]}>Home</div>
        <div className={styles["menu-item"]}>About</div>
        <div className={styles["menu-item"]}>Projects</div>
        <div className={styles["menu-item"]}>Resume</div>
      </div>
      <div className={styles["social-links"]}>
        <div className={styles["link"]}>
          <img src={twitter} alt="twitter profile" />
        </div>
        <div className={styles["link"]}>
          <img src={github} alt="github profile" />
        </div>
        <div className={styles["link"]}>
          <img src={linkedIn} alt="linkedIn profile" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
