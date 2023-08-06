import MobileAndTabletSidebar from "src/components/MobileAndTabletSidebar";
import styles from "src/components/SidebarMenu/index.module.css";
import home from "src/assets/sidebar-menu-images/home.svg";
import about from "src/assets/sidebar-menu-images/about.svg";
import projects from "src/assets/sidebar-menu-images/projects.svg";
import resume from "src/assets/sidebar-menu-images/resume.svg";
import { Link } from "react-router-dom";

interface SidebarMenuProps {
  showSidebar: boolean;
  toggleShowSidebar: () => void;
}

const sidebarMenuItemsList = [
  {
    label: "Home",
    imageUrl: home,
    imageAltText: "Home Icon",
    redirectUrl: "/",
  },
  {
    label: "About",
    imageUrl: about,
    imageAltText: "About Icon",
    redirectUrl: "/",
  },
  {
    label: "Projects",
    imageUrl: projects,
    imageAltText: "Projects Icon",
    redirectUrl: "/projects",
  },
  {
    label: "Resume",
    imageUrl: resume,
    imageAltText: "Resume Icon",
    redirectUrl: "/",
  },
];

function SidebarMenu({ showSidebar, toggleShowSidebar }: SidebarMenuProps) {
  return (
    <div>
      <MobileAndTabletSidebar showSidebar={showSidebar}>
        <div className={styles["container"]}>
          <div className={styles["name-and-icon-container"]}>
            <span className={styles["name"]}>VA</span>
            <span onClick={toggleShowSidebar}>X</span>
          </div>
          <div className={styles["menu-container"]} onClick={toggleShowSidebar}>
            {sidebarMenuItemsList.map(
              ({ label, imageUrl, imageAltText, redirectUrl }, index) => {
                return (
                  <Link to={redirectUrl} key={index}>
                    <div className={styles["menu-item"]}>
                      <span className={styles["icon-container"]}>
                        <img src={imageUrl} alt={imageAltText} />
                      </span>
                      <span className={styles["item-label"]}>{label}</span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </MobileAndTabletSidebar>
    </div>
  );
}

export default SidebarMenu;
