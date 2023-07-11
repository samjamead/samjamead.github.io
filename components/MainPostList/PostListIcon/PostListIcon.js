import styles from "./PostListIcon.module.scss";

export default function PostListIcon({ category }) {
  return (
    <div className={`${styles.icon} ${styles[category]}`}>
      <div className={styles.row}></div>
      <div className={styles.row}></div>
      <div className={styles.row}></div>
    </div>
  );
}
