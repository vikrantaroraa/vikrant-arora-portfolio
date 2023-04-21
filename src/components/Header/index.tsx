import styles from "src/components/Header/index.module.css";
import github from "src/assets/github.svg";
import linkedIn from "src/assets/linkedIn.svg";
import twitter from "src/assets/twitter.svg";
import hamburgerMenu from "src/assets/hamburgerMenu.svg";

function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["name"]}>
        <h3>Vikrant</h3>
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
        <div id={styles["hamburger-menu-icon"]} className={styles["link"]}>
          <img src={hamburgerMenu} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
