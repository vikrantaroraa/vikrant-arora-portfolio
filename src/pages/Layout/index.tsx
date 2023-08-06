import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { useDarkTheme } from "src/context/theme-context";
import styles from "src/App.module.css";

export default function Layout({ children }: any) {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`${styles["App"]} ${darkMode ? styles["dark"] : ""}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
