import { MobileAndTabletSidebarProps } from "src/components/MobileAndTabletSidebar/index.interface";
import styles from "src/components/MobileAndTabletSidebar/index.module.css";

function MobileAndTabletSidebar({
  children,
  showSidebar,
}: MobileAndTabletSidebarProps) {
  return (
    <div
      className={
        showSidebar
          ? `${styles["sidebar-filter"]} ${styles["active"]}`
          : styles["sidebar-filter"]
      }
      style={{
        width: window.innerWidth,
        backgroundColor: "#efefee",
      }}
    >
      {children}
    </div>
  );
}

export default MobileAndTabletSidebar;
