import SkillTile from "src/components/SkillTile/SkillTile";
import styles from "src/components/Skills/index.module.css";
import { useDarkTheme } from "src/context/theme-context";

const skillsData = [
  "React",
  "TypeScript",
  "GraphQL",
  "Storybook",
  "React Native",
  "Jest",
  "Gatsby",
  "NextJS",
  "Rollup",
  "Vite",
  "Express",
  "Python",
  "Flask",
];

function Skills() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`${styles["skills"]} ${darkMode ? styles["dark"] : ""}`}>
      <div
        className={`${styles["heading"]} ${
          darkMode ? styles["heading-dark"] : ""
        }`}
      >
        Skills
      </div>
      <div className={styles["tiles-container"]}>
        {skillsData.map((skill, index) => (
          <SkillTile skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
