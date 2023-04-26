// @ts-nocheck
import styles from "src/components/Header/index.module.css";
import github from "src/assets/github.svg";
import linkedIn from "src/assets/linkedIn.svg";
import twitter from "src/assets/twitter.svg";
import hamburgerMenu from "src/assets/hamburgerMenu.svg";
import { useState } from "react";
import SidebarMenu from "src/components/SidebarMenu";
import { Link } from "react-router-dom";
import { useNavigationMenu } from "src/context/navigation-menu-context";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { activeLink, setActiveLink } = useNavigationMenu();

  const toggleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className={styles["header"]}>
      <div className={styles["name"]}>
        <h3>Vikrant</h3>
      </div>
      <div className={styles["nav-menu"]}>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "home" ? styles["menu-active"] : ""
          }`}
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "about" ? styles["menu-active"] : ""
          }`}
          onClick={() => setActiveLink("about")}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`${styles["menu-item"]} ${
            activeLink === "projects" ? styles["menu-active"] : ""
          }`}
          onClick={() => setActiveLink("projects")}
        >
          Projects
        </Link>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "resume" ? styles["menu-active"] : ""
          }`}
          onClick={() => setActiveLink("resume")}
        >
          Resume
        </Link>
      </div>
      <div className={styles["social-links"]}>
        <SidebarMenu
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />
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
        <div
          id={styles["hamburger-menu-icon"]}
          className={styles["link"]}
          onClick={toggleShowSidebar}
        >
          <img src={hamburgerMenu} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
