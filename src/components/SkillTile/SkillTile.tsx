import styles from "src/components/SkillTile/index.module.css";

interface SkillTileProps {
  skill: string;
}

function SkillTile({ skill }: SkillTileProps) {
  return <div className={styles["tile"]}>{skill}</div>;
}

export default SkillTile;
