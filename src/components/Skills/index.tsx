import SkillTile from "src/components/SkillTile/SkillTile";
import styles from "src/components/Skills/index.module.css";

const skillsData = [
  "ReactJS",
  "TypeScript",
  "GraphQL",
  "Storybook",
  "Jest",
  "Gatsby",
  "NestJS",
  "TypeORM",
  "Express",
  "Python",
  "Flask",
  "PostgreSQL",
];

function Skills() {
  return (
    <div className={styles["skills"]}>
      <div className={styles["heading"]}>Skills</div>
      <div className={styles["tiles-container"]}>
        {skillsData.map((skill, index) => (
          <SkillTile skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
