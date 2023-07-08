import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.app_footer}>
      <div className="container">
        <div className={styles.footer_inner}>
          <p>Bottom</p>
        </div>
      </div>
    </footer>
  );
}
