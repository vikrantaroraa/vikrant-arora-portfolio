// @ts-nocheck
import styles from "src/components/Header/index.module.css";
import github from "src/assets/github.svg";
import linkedIn from "src/assets/linkedIn.svg";
import twitter from "src/assets/twitter.svg";
import hamburgerMenuBlack from "src/assets/hamburgerMenuBlack.svg";
import hamburgerMenuWhite from "src/assets/hamburgerMenuWhite.svg";
import moonIcon from "src/assets/moon.svg";
import sunIcon from "src/assets/sun.svg";
import { useState } from "react";
import SidebarMenu from "src/components/SidebarMenu";
import { Link } from "react-router-dom";
import { useNavigationMenu } from "src/context/navigation-menu-context";
import { useDarkTheme } from "src/context/theme-context";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { activeLink, setActiveLink } = useNavigationMenu();
  const { darkMode, toggleDarkMode } = useDarkTheme();

  const toggleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className={`${styles["header"]} ${darkMode ? styles["dark"] : ""}`}>
      <div className={styles["name"]}>
        <h3 style={{ color: "#ffa7c4" }}>VA</h3>
      </div>
      <div className={styles["nav-menu"]}>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "home" ? styles["menu-active"] : ""
          } ${
            darkMode && activeLink === "home" ? styles["menu-active-dark"] : ""
          }`}
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "about" ? styles["menu-active"] : ""
          } ${
            darkMode && activeLink === "about" ? styles["menu-active-dark"] : ""
          }`}
          onClick={() => setActiveLink("about")}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`${styles["menu-item"]} ${
            activeLink === "projects" ? styles["menu-active"] : ""
          } ${
            darkMode && activeLink === "projects"
              ? styles["menu-active-dark"]
              : ""
          }`}
          onClick={() => setActiveLink("projects")}
        >
          Projects
        </Link>
        <Link
          to="/"
          className={`${styles["menu-item"]} ${
            activeLink === "resume" ? styles["menu-active"] : ""
          } ${
            darkMode && activeLink === "resume"
              ? styles["menu-active-dark"]
              : ""
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
        <div className={styles["togle-icon"]} onClick={toggleDarkMode}>
          {darkMode ? (
            <img src={sunIcon} alt="light mode icon" />
          ) : (
            <img src={moonIcon} alt="dark mode icon" />
          )}
        </div>
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
          {darkMode ? (
            <img src={hamburgerMenuWhite} alt="menu" />
          ) : (
            <img src={hamburgerMenuBlack} alt="menu" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
