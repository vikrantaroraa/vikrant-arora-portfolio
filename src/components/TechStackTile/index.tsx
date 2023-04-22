import styles from "src/components/TechStackTile/index.module.css";

interface TechStackTileProps {
  name: string;
}

function TechStackTile({ name }: TechStackTileProps) {
  return <div className={styles["tile"]}>{name}</div>;
}

export default TechStackTile;
